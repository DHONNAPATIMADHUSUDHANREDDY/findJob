package com.example.fwork.controller;

import com.example.fwork.model.Apply;
import com.example.fwork.services.ApplyService;
import com.example.fwork.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/apply")
@CrossOrigin
public class ApplyController {

    @Autowired
    private ApplyService serv;

    @Autowired
    private LoginService loginService;

    /*
    @PostMapping("/applypost")
    public void adddata(@RequestBody Apply data){
        serv.adddata(data);
    }
*/

    @GetMapping("/applyget")
    public List<Apply> applyget(){
        return serv.applyget();
    }

    //new
/*
    @PostMapping("/applypost/{findWorkId}")
    public void adddata(@RequestBody Apply data, @PathVariable int findWorkId){
        serv.adddata(data, findWorkId);
    }
    */
    @PostMapping("/applypost/{findWorkId}")
    public ResponseEntity<?> adddata(@RequestBody Apply data, @PathVariable int findWorkId){
      try{
          serv.adddata(data, findWorkId);
          return new ResponseEntity<>(HttpStatus.OK);
      }catch (RuntimeException e){
          return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
      }
    }

    @GetMapping("/providerApplications")
    public List<Apply> getProviderApplications() {
        String currentUser = loginService.getUname();
        return serv.getApplicationsForProvider(currentUser);
    }



}
