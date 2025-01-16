package com.example.youtube.Login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.youtube.SignUp.SignUp;

@RestController
public class loginController {

    private final loginRepository loginRepository;

    @Autowired
    loginController(loginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    @GetMapping("/Login")
    public List<SignUp> LoginEndpoint(@RequestBody Login login) {
        return this.loginRepository.findAll();
    }
}