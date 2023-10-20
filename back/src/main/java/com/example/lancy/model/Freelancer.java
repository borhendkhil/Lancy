package com.example.lancy.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "freelancer")

public class Freelancer {
    @Id
    @GeneratedValue (strategy = jakarta.persistence.GenerationType.IDENTITY)
    private long id;
    @Column (name = "name")
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
    @Column (name = "bio")
    private String bio;
    @Column (name = "skills")
    private String skills;
    @Column (name = "languages")
    private String languages;
    @Column (name = "experiences")
    private String experiences;
    @Column (name = "education")
    private String education;


    public Freelancer() {
    }

    public Freelancer(String name, String firstName, String mail, String password, long phone, String address, LocalDate birthDate, int age, String bio, String skills, String languages, String experiences, String education) {

        this.name = name;
        this.firstName = firstName;
        this.mail = mail;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.birthDate = birthDate;
        this.age = age;
        this.bio = bio;
        this.skills = skills;
        this.languages = languages;
        this.experiences = experiences;
        this.education = education;
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

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public String getExperiences() {
        return experiences;
    }

    public void setExperiences(String experiences) {
        this.experiences = experiences;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }
}
