
* 1. Explain the difference between RDBMS and SQL.
Answer: RDBMS is a relational database management system. It is the database software which manages storing, updating, querying, etc. RDBMS is a system.
SQL is the Structured Query Language. It is typically used to query RDBMS. SQL is a language used to interact with the system (RDBMS).

* 2. Why do tables need a primary key?
Answer: For efficient retrieval of rows from the table tables need to have a primary key.

* 3. What is the name given to a table column that references the primary key on another table.
Answer: Foreign key

* 4. What do we need in order to have a many to many relationship between two tables.
Answer: We need to use third entity in order to store the mapping relationship between the two tables to build a Many to Many Relationships

* 5. What SQL statement is used to retrieve data from a table?
Answer: SELECT statement is used to retrieve data from a table

* 6. What SQL clause is used to filter the results of a query?
Answer: WHERE SQL clause is used to filter the results of a query

* 7. What are views? Provide one example use case for them.
Answer: view is a virtual table, defined by a query. It makes selective portion of the data from one or more tables seen. It does not exist until it is invoked by its name in the SQL statement. Views make querying very easy for large and complex tables.
For example: 
CREATE VIEW view_student
AS
SELECT student_id, student_name
FROM student; 

