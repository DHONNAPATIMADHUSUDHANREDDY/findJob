package com.example.fwork.controller;

import com.example.fwork.model.FindWork;
import com.example.fwork.services.FindWorkService;
import com.example.fwork.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class FindWorkController {
    @Autowired
    FindWorkService serv;
    @Autowired
    LoginService ls;

    @RequestMapping("/details")
    public List<FindWork> show() {
        return serv.display();
    }

    @PostMapping("/addData")
    public ResponseEntity<?> addData(@RequestBody FindWork data) {
        try {
            serv.adddata(data);
            return new ResponseEntity<>(HttpStatus.CREATED,HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

        //find by current usser
        @GetMapping("/fbu")
        public ResponseEntity<?> Fbu(){
            try{
                String currentUser=ls.getUname();
                List<FindWork> works =  serv.fbu(currentUser);
                return new ResponseEntity<>(works,HttpStatus.OK);
            }catch (RuntimeException e){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }





    @PutMapping("/updata")
    public void updatedata(@RequestBody FindWork data) {
        serv.updatedata(data);
    }

    @DeleteMapping("/deldata/{id}")
    public void deldata(@PathVariable int id) {
        serv.deletedata(id);
    }
}
