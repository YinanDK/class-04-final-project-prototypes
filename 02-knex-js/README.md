# Knex JS Prototype

###Purpose:
We need a tool to help keep the state of the database synchronized with the current version of the codebase. In Knex you use seed files and migrations for this. We need a prototype demonstrating a few simple migrations and a seed script in order to compare with similar solutions implemented in Mongo DB. Additionally we need some written research to compare whether MySql or Mongo DB is a better fit for the project, so it is advisable that whomever is building this prototype receives feedback from the students doing the Mongo DB prototype.

###Questions:
* What does Knex JS do?
* Why do we need it?
* How do you set up Knex JS?
* How does Knex JS compare to an ORM?
* What are cons and pros of using Knex JS compared to alternative options?

###Exercise:
* First, try to create a database table with the mysql console or Mysql Workbench and use the Knex JS api to generate some INSERT sql-queries to create some content.
* Try to read some data from the table using the Knex API.
* Delete all of the previous tables and set up a migration (up and down) to create a couple of tables with a relationship between them.
* Create a seed file to populate the tables with sample data.
* Read some data that requires you to make a JOIN statement (again using the Knex Api, not by writing SQL).
* Try to delete all tables in your database and test that you can regenerate everything using migrations and seeds.
* Write a new migration changing your database schema and test that you can run both the up- and down migration.
* If you have not already done so, separate all configuration into a separate file and put the database url, username and password into environment variables (you can see an example of this [here](https://github.com/HackYourFuture-CPH/class03-final-project/compare/set-up-env-variables). Never commit sensitive data to github.
