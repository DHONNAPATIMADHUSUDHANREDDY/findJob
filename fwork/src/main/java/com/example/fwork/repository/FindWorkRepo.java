package com.example.fwork.repository;

import com.example.fwork.model.FindWork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FindWorkRepo extends JpaRepository<FindWork,Integer> {
    //it helps to find username entries in database....
    List<FindWork> findByUsername(String username);
}
