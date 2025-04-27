package com.example.covid;

import com.example.covid.service.CovidDataService;

public class MainApp {
    public static void main(String[] args) {
        CovidDataService service = new CovidDataService();
        service.startFetching();
    }
}
