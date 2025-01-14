package com.example.youtube.SignUp;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service

public class signUpService {
    private final SignUpRepository SignUpRepository;

    @Autowired
    signUpService(SignUpRepository signUpRepository) {
        this.SignUpRepository = signUpRepository;
    }

    public SignUp createAccount(SignUp signUp) {
        return this.SignUpRepository.save(signUp);
    }
}