package com.example.youtube.SignUp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {
    private final signUpService signUpService;

    @Autowired
    SignUpController(signUpService signUpService) {
        this.signUpService = signUpService;
    }

    @CrossOrigin("*")
    @PostMapping("/signup")
    public SignUp createAccount(@RequestBody SignUp signUp) {
        return this.signUpService.createAccount(signUp);
    }
}