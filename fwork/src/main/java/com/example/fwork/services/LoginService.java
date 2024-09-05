package com.example.fwork.services;

import com.example.fwork.model.Login;
import com.example.fwork.repository.Loginrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

    @Autowired
    Loginrepo repo;


    //register
    public Login posdata(Login data) {
        if (repo.findByUsername(data.getUsername()) != null) {
            throw new RuntimeException("User already found");
        }
        return repo.save(data);
    }

    public List<Login> gedata() {
        return repo.findAll();
    }

    //login
    private String Uname;

    public Login fuser(String username, String password) {
        Login user = repo.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            Uname = user.getUsername();
            return user;
        }
        throw new RuntimeException("invalid user");
    }

    public String getUname() {
        return Uname;
    }



}
