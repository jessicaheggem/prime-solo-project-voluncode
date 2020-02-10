
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
	"user_id" INT REFERENCES "user",
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