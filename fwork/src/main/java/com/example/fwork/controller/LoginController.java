package com.example.fwork.controller;

import com.example.fwork.model.Login;
import com.example.fwork.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/log")
public class LoginController {
    @Autowired
    LoginService serv;

    //register
    @PostMapping("/pdata")
    public ResponseEntity<?> posdata(@RequestBody Login data){
        try {
            serv.posdata(data);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (RuntimeException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }

    }

    //login
    @PostMapping("/Finduser")
    public ResponseEntity<?>Fuser(@RequestBody Login data){
        try{
            serv.fuser(data.getUsername(), data.getPassword());
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(RuntimeException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }

    }

    @GetMapping("/gdata")
    public List<Login> display(){
        return serv.gedata();
    }

    //new
    @GetMapping("/currentUser")
    public ResponseEntity<String> getCurrentUser() {
        String username = serv.getUname();
        return new ResponseEntity<>(username, HttpStatus.OK);
    }

}
