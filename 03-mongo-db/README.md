# Mongo DB Prototype

### Purpose:
We need a tool to help keep the state of the database synchronized with the current version of the codebase. You will have to find a tool for Mongo DB (or write something yourself) that provides you with functionality similar to the migrations and seeding functionality in Knex JS, but using Mongo instead of MySql. Additionally, you should do some research to compare whether MySql or Mongo DB is a better fit for the project, so it is advisable that whomever is building this prototype receives feedback from the students doing the Knex JS prototype.

### Questions:
* What does Mongo DB do?
* Why do we need it?
* How do you set up Mongo DB?
* How does Knex JS compare to MySql?
* What are cons and pros of using Mongo DB compared to alternative options?

### Exercise:
* Research how to create, read, update and delete Mongo DB collections and documents.
* Find a tool (or write your own) that provides the ability to do the equivalent of up- and down-migrations.
* Find a tool (or write your own) that provides the ability to populate the database with a collection.
* Perform some complicated queries across multiple collections.
* Separate any configuration variables (database url, username and password) into environment variables. You can see an example of this done with MySql [here](https://github.com/HackYourFuture-CPH/class03-final-project/compare/set-up-env-variables). Never commit sensitive data to github.
