#  Proyecto COVID-API

##  Descripción General

El proyecto **COVID-API** es una aplicación Java que **consume datos de una API pública sobre COVID-19** (vía RapidAPI) y **almacena la información** de regiones, provincias y reportes diarios en **una base de datos MySQL/MariaDB**.

Está diseñado bajo buenas prácticas, aplicando el principio **S de SOLID** (Single Responsibility Principle) y estructurado en capas claras de **modelo, servicio, repositorio y utilidades**.

##  Proceso realizado

1. **Configuración inicial:**
   - Archivo `application.properties` para parametrizar:
     - Tiempo de espera (`thread.delay`)
     - ISO del país a consultar (`report.iso`)
     - Fecha de reporte (`report.date`)
   - Conexión a base de datos configurada en `persistence.xml` usando JPA.

2. **Lectura de configuración:**
   - Clase `ConfigUtil.java` para leer automáticamente desde `application.properties`.

3. **Arranque del programa:**
   - `MainApp.java` inicia el proyecto.
   - Se implementa un `Thread` que espera **15 segundos**.

4. **Consumo de API:**
   - `CovidDataService.java`:
     - Consume `/regions`
     - Guarda en tabla `Region`
     - Consume `/provinces`
     - Guarda en tabla `Province`
     - Consume `/reports`
     - Guarda en tabla `CovidReport`

5. **Persistencia de datos:**
   - Repositorios utilizan JPA para guardar los datos en MySQL.

6. **Manejo de logs:**
   - Log4J registra eventos importantes (inicio, consumo, guardado, errores).

##  Estructura del Proyecto

```
covid-api/
 ├── src/
 │    └── main/
 │         ├── java/
 │         │    └── com/
 │         │         └── example/
 │         │              └── covid/
 │         │                   ├── model/
 │         │                   │    ├── CovidReport.java
 │         │                   │    ├── Province.java
 │         │                   │    └── Region.java
 │         │                   ├── repository/
 │         │                   │    ├── CovidReportRepository.java
 │         │                   │    ├── ProvinceRepository.java
 │         │                   │    └── RegionRepository.java
 │         │                   ├── service/
 │         │                   │    └── CovidDataService.java
 │         │                   ├── util/
 │         │                   │    └── ConfigUtil.java
 │         │                   └── MainApp.java
 │         └── resources/
 │              ├── META-INF/persistence.xml
 │              └── application.properties
 ├── pom.xml
```

##  Configuración Importante

**Archivo `application.properties`:**

```properties
thread.delay=15000
report.iso=GTM
report.date=2022-04-16
```

**Archivo `persistence.xml`:**
- Conexión a la base de datos `covid_db`.
- Uso de Hibernate.

##  Base de Datos

Se generan automáticamente:

| Tabla          | Contenido |
|:---------------|:----------|
| `Region`       | Países (nombre, ISO). |
| `Province`     | Provincias de Guatemala. |
| `CovidReport`  | Reportes diarios de COVID-19. |

##  ¿Cómo ejecutar el proyecto?

1. Crear la base de datos `covid_db` en MySQL/MariaDB.
2. Abrir el proyecto en NetBeans o IntelliJ.
3. Configurar credenciales en `persistence.xml`.
4. Ejecutar `MainApp.java`.
5. Esperar 15 segundos y ver los logs.

#  Resultado esperado

- Logs mostrando ejecución correcta.
- Datos insertados en `Region`, `Province` y `CovidReport` en MySQL.

#  Observaciones Finales

- Arquitectura limpia y modular.
- Parámetros de tiempo y API configurables sin tocar código.
- Cumple con buenas prácticas Java y JPA.
