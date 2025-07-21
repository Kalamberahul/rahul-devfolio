// FILE: src/main/java/com/yourname/portfolio/model/ContactSubmission.java

package com.kalamberahul.portfolio.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data // Lombok annotation to generate getters, setters, toString, etc.
@Document(collection = "submissions") // Specifies the MongoDB collection name
public class ContactSubmission {

    @Id
    private String id;

    private String name;
    private String email;
    private String message;
    private LocalDateTime timestamp;

    public ContactSubmission() {
        this.timestamp = LocalDateTime.now();
    }
}
