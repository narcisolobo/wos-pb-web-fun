# Aggregate Functions and GROUP BY Clauses

In our SQL journey, we often need to perform calculations on our data, such as counting the number of pets each user has, finding the average age of pets, or determining the maximum or minimum age of all pets. This is where aggregate functions and `GROUP BY` clauses come in handy.

## Aggregate Functions

Aggregate functions perform a calculation on a set of values and return a single value. Some commonly used aggregate functions are:

- `COUNT()`: Returns the number of rows.
- `SUM()`: Returns the total sum of a numeric column.
- `AVG()`: Returns the average value of a numeric column.
- `MAX()`: Returns the highest value in a column.
- `MIN()`: Returns the lowest value in a column.

Let's explore these functions with examples from our "boops" schema.

### Example 1: Counting the Number of Pets

To count the total number of pets in our database, we can use the `COUNT()` function.

```sql
SELECT COUNT(*) AS total_pets FROM pets;
```

### Example 2: Finding the Average Age of Pets

To find the average age of pets, we use the `AVG()` function.

```sql
SELECT AVG(age) AS average_age FROM pets;
```

## GROUP BY Clauses
The GROUP BY clause is used to group rows that have the same values in specified columns into summary rows, like "find the number of pets each user has." It is often used with aggregate functions.

### Example 3: Counting Pets for Each User

To find out how many pets each user has, we can group the rows by `user_id` and use the `COUNT()` function.

```sql
SELECT user_id, COUNT(*) AS number_of_pets
FROM pets
GROUP BY user_id;
```

This query will return the `user_id` and the count of pets for each user.

### Example 4: Average Age of Pets for Each User

To find the average age of pets for each user, we can group the rows by `user_id` and use the `AVG()` function.

```sql
SELECT user_id, AVG(age) AS average_age
FROM pets
GROUP BY user_id;
```

### Combining GROUP BY with JOIN

We can also use `GROUP BY` in conjunction with `JOIN` to get more detailed results. For example, if we want to know the number of pets each user has along with their names, we can join the `users` and `pets` tables.

```sql
SELECT users.name, COUNT(pets.pet_id) AS number_of_pets
FROM users
LEFT JOIN pets ON users.id = pets.user_id
GROUP BY users.name;
```

This query will return the name of each user and the number of pets they have.

### Example 5: Maximum and Minimum Ages

Suppose we want to find the highest and lowest ages of each pet.

```sql
SELECT pet_id, MAX(age) AS oldest_age, MIN(age) AS youngest_age
FROM pets
GROUP BY pet_id;
```
