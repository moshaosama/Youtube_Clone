package com.example.youtube;

import jakarta.persistence.Entity;

@Entity
public class Login {
    private Integer id;
    private String Email;
    private String Password;

    Login(String Email, String Password) {
        this.Email = Email;
        this.Password = Password;
    }

    Login() {
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getEmail() {
        return this.Email;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    public String getPassword() {
        return this.Password;
    }
}