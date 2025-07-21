// FILE: src/main/java/com/kalamberahul/portfolio/repository/ContactRepository.java

package com.kalamberahul.portfolio.repository;

import com.kalamberahul.portfolio.model.ContactSubmission; // <-- This line has been corrected
import org.springframework.data.mongodb.repository.MongoRepository;

// This interface extends MongoRepository, which gives us all the basic CRUD operations.
// We specify the Model class (ContactSubmission) and the type of its ID (String).
public interface ContactRepository extends MongoRepository<ContactSubmission, String> {
    // We can add custom query methods here if needed in the future.
}
