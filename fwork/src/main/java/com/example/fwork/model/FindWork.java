package com.example.fwork.model;

import com.example.fwork.services.LoginService;
import jakarta.persistence.*;


@Entity
public class FindWork {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "TEXT")
    private String descri;
    @Column(columnDefinition = "TEXT")
    private String lim;
    private float price;
    private String wtitle;
    private String stitle;
    private String username;
    public FindWork() {
    }

    public FindWork(int id, String descri, String lim, float price, String wtitle, String stitle ,String username) {
        this.id = id;
        this.descri = descri;
        this.lim = lim;
        this.price = price;
        this.wtitle = wtitle;
        this.stitle = stitle;
        this.username=username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescri() {
        return descri;
    }

    public void setDescri(String descri) {
        this.descri = descri;
    }

    public String getLim() {
        return lim;
    }

    public void setLim(String lim) {
        this.lim = lim;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getWtitle() {
        return wtitle;
    }

    public void setWtitle(String wtitle) {
        this.wtitle = wtitle;
    }

    public String getStitle() {
        return stitle;
    }

    public void setStitle(String stitle) {
        this.stitle = stitle;
    }

}
