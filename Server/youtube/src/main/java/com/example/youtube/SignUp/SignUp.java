package com.example.youtube.SignUp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class SignUp {
    @Id
    @GeneratedValue
    private Integer id;
    private String username;
    private String Email;
    private String Password;
    private String passwordCheck;

    public SignUp(String username, String email, String password) {
        this.username = username;
        this.Email = email;
        this.Password = password;
    }

    public SignUp() {
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return this.id;
    }

    public void setuserName(String username) {
        this.username = username;
    }

    public String getuserName() {
        return this.username;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public String getEmail() {
        return this.Email;
    }

    public void setPassword(String password) {
        this.Password = password;
    }

    public String getPassword() {
        return this.Password;
    }

    public void setPasswordCheck(String passwordCheck) {
        this.passwordCheck = passwordCheck;
    }

    public String getPasswordCheck() {
        return this.passwordCheck;
    }
}