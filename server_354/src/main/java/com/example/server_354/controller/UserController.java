package com.example.server_354.controller;

import com.example.server_354.Services.UserService;
import com.example.server_354.object.User;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
            response.put("message", "Server error: "+e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }catch (Exception e){
            response.put("message", "Error: "+e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }



    @PostMapping("/getByEmail")
    public Optional<User> getUserByEmail(@RequestBody String email){
        return userService.getUserByEmail(email);
    }

    @PostMapping("/getResByEmail")
    public boolean getResponseByEmail(@RequestBody Map<String,String> emailMap){
        System.out.println(userService.getResponseByEmail(emailMap.get("email")));
        return userService.getResponseByEmail(emailMap.get("email"));
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody String fullName,
                                             @RequestBody String email,
                                             @RequestBody String password,
                                             @RequestBody String phoneNumber,
                                             @RequestBody String role){
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
