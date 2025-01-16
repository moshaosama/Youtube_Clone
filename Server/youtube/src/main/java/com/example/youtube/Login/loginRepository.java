package com.example.youtube.Login;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.youtube.SignUp.SignUp;

public interface loginRepository extends JpaRepository<SignUp, Integer> {

}