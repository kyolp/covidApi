package com.example.covid.repository;

import com.example.covid.model.CovidReport;
import javax.persistence.*;

public class CovidReportRepository {

    private EntityManager entityManager;

    public CovidReportRepository() {
        entityManager = Persistence.createEntityManagerFactory("CovidPU").createEntityManager();
    }

    public void save(CovidReport report) {
        EntityTransaction tx = entityManager.getTransaction();
        try {
            tx.begin();
            entityManager.persist(report);
            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        }
    }
}
