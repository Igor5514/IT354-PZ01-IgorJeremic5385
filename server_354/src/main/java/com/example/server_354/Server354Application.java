package com.example.server_354;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Server354Application {

	public static void main(String[] args) {
		SpringApplication.run(Server354Application.class, args);
	}

	@Configuration
	public static class WebConfig implements WebMvcConfigurer {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**")  // Allow CORS for all endpoints
					.allowedOrigins("http://localhost:5173")  // Allow only your React app's origin
					.allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow specific methods
					.allowedHeaders("*")  // Allow all headers
					.allowCredentials(true);
		}
	}
}