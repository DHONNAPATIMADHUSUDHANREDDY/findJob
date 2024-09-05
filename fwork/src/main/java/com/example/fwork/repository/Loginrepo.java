package com.example.fwork.repository;

import com.example.fwork.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Loginrepo extends JpaRepository<Login,Integer> {
    Login findByUsername(String username);

}
