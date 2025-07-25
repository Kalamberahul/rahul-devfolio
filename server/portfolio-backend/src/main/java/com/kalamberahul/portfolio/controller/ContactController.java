// FILE: src/main/java/com/kalamberahul/portfolio/controller/ContactController.java

package com.kalamberahul.portfolio.controller;

import com.kalamberahul.portfolio.model.ContactSubmission;
import com.kalamberahul.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
// Allow requests from both your local dev server and your live Netlify site
@CrossOrigin(origins = {"http://localhost:5173", "https://rahul-devfolio.netlify.app"})
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/contact")
    public ResponseEntity<ContactSubmission> createSubmission(@RequestBody ContactSubmission submission) {
        try {
            // Set the timestamp on the server-side before saving
            submission.setTimestamp(java.time.LocalDateTime.now());
            ContactSubmission savedSubmission = contactRepository.save(submission);
            return new ResponseEntity<>(savedSubmission, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}