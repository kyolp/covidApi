package com.example.covid.model;

import javax.persistence.*;

@Entity
public class CovidReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;
    private String province;
    private int confirmed;
    private int deaths;
    private int recovered;
    private int active;

    @Lob
    @Column(name = "data", columnDefinition = "TEXT")
    private String rawDataJson;

    public CovidReport() {}

    public CovidReport(String date, String province, int confirmed, int deaths, int recovered, int active, String rawDataJson) {
        this.date = date;
        this.province = province;
        this.confirmed = confirmed;
        this.deaths = deaths;
        this.recovered = recovered;
        this.active = active;
        this.rawDataJson = rawDataJson;
    }
}
