package com.example.fwork.repository;

import com.example.fwork.model.Apply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Applyrepo extends JpaRepository<Apply,Integer> {
    //new
    List<Apply> findByFindWorkUsername(String username);
    }
