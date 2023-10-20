package com.example.lancy.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;
    @Column (name = "first_name")
    private String firstName;
    @Column (name = "mail")
    private String mail;
    @Column (name = "password")
    private String password;
    @Column (name = "phone")
    private long phone;
    @Column (name = "address")
    private String address;
    @Column (name = "birth_date")
    private LocalDate birthDate;
    @Transient
    private int age;

    public Client( String name, String firstName, String mail, String password, long phone, String address, LocalDate birthDate, int age) {
        this.name = name;
        this.firstName = firstName;
        this.mail = mail;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.birthDate = birthDate;
        this.age = age;
    }

    public Client() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public int getAge() {
        return Period.between(this.birthDate, LocalDate.now()).getYears();
    }

    public void setAge(int age) {
        this.age = age;
    }
}
