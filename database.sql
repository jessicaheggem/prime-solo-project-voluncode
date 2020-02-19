
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	-- figure out how to timestamp entries to display on DOM when signed in - "Member of Voluncode since:"
	-- "timestamp" TIMESTAMP NOT NULL,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(255) NOT NULL,
	"state" VARCHAR(255) NOT NULL,
	"occupation" VARCHAR(255) NOT NULL,
	"portfolio" VARCHAR(255) NOT NULL,
	"time_available" VARCHAR(255) NOT NULL,
	"languages" VARCHAR(255) NOT NULL,
	"qualifications" VARCHAR(255) NOT NULL
);

CREATE TABLE "project" (
	"id" SERIAL PRIMARY KEY,
	-- "user_id" INT REFERENCES "user",
	"organization_name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"start_date" DATE NOT NULL,
	"end_date" DATE NOT NULL
);

CREATE TABLE "user_project" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"project_id" INT REFERENCES "project"
);

INSERT INTO "project" ("organization_name", "description", "start_date", "end_date")
VALUES ('The Link', 'We need a new app that will help our clients easily find housing! 
We currently do not have an app so we are looking for a developer to create something new for us. 
We would like to have it created by the end of the year, if possible. We will need to have access 
from an administration side, and our clients will need to be able to access their account. 
We want it to be secure so no one can access their information when they are logged in. 
We look forward to finding some amazing developers to create our project!', '2-20-2020', '3-1-2021'), 
('Stories Foundation', 'We need a developer to work with us to update our website. Visitors struggle 
to navigate our website and we do not receive many donations because there is a lot going on on our website. 
We need help reorganizing our website to make it clearer to website visitors. We also want our website to 
be fun and accessible to everyone. We cannot wait to talk to the developers who will work on our website!', 
'3-1-2020', '12-31-2020');