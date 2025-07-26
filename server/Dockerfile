# Stage 1: Build the application
FROM maven:3.8-openjdk-17 AS build
WORKDIR /app

# Copy the pom.xml from the correct sub-directory
COPY portfolio-backend/pom.xml .

# Copy the source code from the correct sub-directory
COPY portfolio-backend/src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Create the final image
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/portfolio-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]