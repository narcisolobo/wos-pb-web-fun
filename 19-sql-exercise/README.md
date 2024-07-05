# SQL Exercise: Vinyl Record Collection Application

In this activity, we will use a database for "The Vinyl Countdown", a hypothetical vinyl record collection application. We will perform various CRUD operations and explore more advanced SQL features such as joins, aggregate functions, and more.

## Exercise Overview

### Objective

By the end of this exercise, you will:
1. Perform CRUD (Create, Read, Update, Delete) operations.
2. Write SQL queries using JOINs
3. Write SQL queries using aggregate functions with GROUP BY clauses.

### Scenario

Imagine you are building an application to manage a vinyl record collection. This application will have collectors who can upload records and rate records. We will start by creating three tables: `Collectors`, `Records`, and `Ratings`.

## Getting Started

1. **Create the Database**
   In MySQL Workbench, go to `File > Open SQL Script...` and open the `vinyl-countdown.sql` file. Execute the file to create the database and tables.

2. **Seed the Database**
    In MySQL Workbench, go to `File > Open SQL Script...` and open the `seed.sql` file. Execute the file to seed the database with collectors, records, and ratings.

## Exercise Tasks

### Part 1: CRUD Operations

1. **Create Operations**
    - Insert new collectors, records, and ratings.

2. **Read Operations**
    - Select all collectors, records by a specific collector, and ratings for a specific record.

3. **Update Operations**
    - Update a collector's email and a record's genre.

4. **Delete Operations**
    - Delete a rating and a record.

### Part 2: JOIN Statements

1. **Join Collectors and Records**

2. **Join Records and Ratings**

3. **Join All Three Tables**

### Part 3: Aggregate Functions with GROUP BY

1. **Average Rating for Each Record**

2. **Count of Records Uploaded by Each Collector**

3. **Count of Ratings Given by Each Collector**
