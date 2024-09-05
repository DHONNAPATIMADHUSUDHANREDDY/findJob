package com.example.fwork.model;

import jakarta.persistence.*;

@Entity
public class Apply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String mail;
    private Long phone;

    public Apply(int id, String name, String mail, Long phone) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.phone = phone;
    }

    public Apply() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    //new

    @ManyToOne
    @JoinColumn(name = "find_work_id")
    private FindWork findWork;

    // Getters and Setters for the new field
    public FindWork getFindWork() {
        return findWork;
    }

    public void setFindWork(FindWork findWork) {
        this.findWork = findWork;
    }


}
