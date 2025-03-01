package com.example.server_354.controller;

import com.example.server_354.Services.UserService;
import com.example.server_354.object.LoginRequest;
import com.example.server_354.object.User;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<Map<String,String>> addUser(@RequestBody User user){
        Map<String, String> response = new HashMap<>();
        try{
            userService.createUser(user);
            response.put("message", "User created successfully");
            return ResponseEntity.ok(response);
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            response.put("message", "Server error: "+e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }catch (Exception e){
            System.out.println(e.getMessage());
            response.put("message", "Error: "+e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/getByEmail")
    public ResponseEntity<?> getUserByEmail(@RequestBody LoginRequest loginRequest){
        Map<String,String> message = new HashMap<>();
        try{
            Optional<User> user = userService.getUserByEmail(loginRequest.getEmail());
            if(user.isPresent()){
                if(Objects.equals(loginRequest.getPassword(), user.get().getPassword())){
                    return ResponseEntity.ok(user.get());
                }else {
                    message.put("message", "passwords do not match failed to login");
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(message);
                }
            }else {
                message.put("message", "User not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
            message.put("message", "Error: "+e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(message);
        }
    }

    @PostMapping("/getResByEmail")
    public boolean getResponseByEmail(@RequestBody Map<String,String> emailMap){
        return userService.getResponseByEmail(emailMap.get("email"));
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody String fullName,
                                             @RequestBody String email,
                                             @RequestBody String password,
                                             @RequestBody String phoneNumber,
                                             @RequestBody String role){
        if(!role.equals("user")){
            role = "user";
        }
        if(userService.updateUser(fullName, email, password, phoneNumber, role)){
            return ResponseEntity.ok("user updated successfully");
        }else{
            return ResponseEntity.ok("failed to update user");
        }
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
