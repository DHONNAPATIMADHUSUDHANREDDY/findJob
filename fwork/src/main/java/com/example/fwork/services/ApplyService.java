

package com.example.fwork.services;

import com.example.fwork.model.Apply;
import com.example.fwork.model.FindWork;
import com.example.fwork.repository.Applyrepo;
import com.example.fwork.repository.FindWorkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyService {

    @Autowired
    private Applyrepo repo;

    @Autowired
    private FindWorkRepo findWorkRepo;

    public List<Apply> applyget(){
        return repo.findAll();
    }

    public void adddata(Apply data, int findWorkId){
        FindWork findWork = findWorkRepo.findById(findWorkId).orElseThrow(() -> new RuntimeException("Work not found"));
        data.setFindWork(findWork);
        repo.save(data);
    }

    public List<Apply> getApplicationsForProvider(String username) {
        return repo.findByFindWorkUsername(username);
    }
}









/*
package com.example.fwork.services;
import com.example.fwork.model.Apply;
import com.example.fwork.model.FindWork;
import com.example.fwork.repository.Applyrepo;
import com.example.fwork.repository.FindWorkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyService {

    @Autowired
    private Applyrepo repo;

    //new
    @Autowired
    private FindWorkRepo findWorkRepo;

    public List<Apply> applyget(){
        return repo.findAll();
    }



    public void adddata(Apply data){
        repo.save(data);
    }



}
*/