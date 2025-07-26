# Stage 1: Build the application using a valid Java 21 Maven image
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy the Maven project file
COPY portfolio-backend/pom.xml .

# Copy the source code
COPY portfolio-backend/src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Create the final image using a valid Java 21 JRE image
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/portfolio-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]