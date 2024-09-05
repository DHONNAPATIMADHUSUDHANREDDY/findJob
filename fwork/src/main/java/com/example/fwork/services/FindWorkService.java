package com.example.fwork.services;

import com.example.fwork.model.FindWork;
import com.example.fwork.repository.FindWorkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;


import java.util.List;

@Service
public class FindWorkService {
    @Autowired
     FindWorkRepo repo;

    @Autowired
    LoginService ls;
 //get data
    public List<FindWork> display(){
        return repo.findAll();
    }
    //post data
    public void adddata(FindWork data){
        String CurrentUser=ls.getUname();
       data.setUsername(CurrentUser);
        repo.save(data);
    }


    //update
    public void updatedata(FindWork data){
        repo.save(data);
    }
    public void deletedata(int id){
        repo.deleteById(id);
    }

    //get data from who are signedin(itself)
    public List<FindWork> fbu(String username) {
        return repo.findByUsername(username);
    }


}
