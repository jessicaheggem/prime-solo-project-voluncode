CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(255) NOT NULL,
	"state" VARCHAR(255) NOT NULL,
	"occupation" VARCHAR(255) NOT NULL,
	"portfolio" VARCHAR(255) NOT NULL,
	"time_available" VARCHAR(255) NOT NULL,
	"languages" VARCHAR(255) NOT NULL,
	"qualifications" VARCHAR(255) NOT NULL,
	"timestamp" TIMESTAMP
);

CREATE TABLE "project" (
	"id" SERIAL PRIMARY KEY,
	"organization_name" VARCHAR(100) NOT NULL,
	"website" VARCHAR(255),
	"email" VARCHAR(255) NOT NULL,
	"description" TEXT NOT NULL,
	"start_date" DATE NOT NULL,
	"end_date" DATE NOT NULL
);


CREATE TABLE "user_project" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"project_id" INT REFERENCES "project"
);

INSERT INTO "project" ("organization_name", "website", "email", "description", "start_date", "end_date")
VALUES ('The Link', 'thelinkmn.org', 'info@thelinkmn.org', 'We need a new app that will help our clients
 easily find housing! We currently do not have an app so we are looking for a developer to create 
 something new for us. We would like to have it created by the end of the year, if possible. We will 
 need to have access from an administration side, and our clients will need to be able to access their 
 account. We want it to be secure so no one can access their information when they are logged in. We 
 look forward to finding some amazing developers to create our project!', '2-20-2020', '3-1-2021'), 
 ('Stories Foundation', 'storiesfoundation.org', 'storiesfoundation@gmail.com', 'We need a developer 
 to work with us to update our website. Visitors struggle to navigate our website and we do not receive 
 many donations because there is a lot going on on our website. We need help reorganizing our website 
 to make it clearer to website visitors. We also want our website to be fun and accessible to everyone. 
 We cannot wait to talk to the developers who will work on our website!', '3-1-2020', '12-31-2020'), 
 ('Dress for Success', 'dressforsuccess.org', 'worldwide@dressforsuccess.org', 'We would like some 
 updates made to our website to make it more user friendly! We also want to add some fun new functionality 
 that we will share with you when we chat. We are excited to find some developers to help us improve our 
 website! We cannot wait to meet you!', '4-1-2020', '4-2-2021'), 
 ('ACT United', 'actunited.org', 'connect.actunited@gmail.com', 'We are a non-profit organization creating 
 awareness about human trafficking. We currently need to update our donate page on our website so it is 
 easier for people to make donations. We want to make it stand out and make it as easy as possible to 
 donate. There are also some pages that have information that is no longer relevant to our organization 
 so we want to update that and move some things around. Again, we want our website to be easy to 
 understand and navigate so visitors know where to go to learn about us, donate, and get in contact with 
 us. We are excited to meet any developers interested in working on our website and cannot wait to see 
 the final product!', '3-15-2020', '6-15-2021'), 
 ('Simpson Housing Services', 'simpsonhousing.org', 'info@simpsonhousing.org', 'Lorem ipsum dolor sit amet, 
 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
 aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
 laborum.', '6-1-2020', '5-31-2021'), 
 ('Amherst H. Wilder Foundation', 'wilder.org', 'info@wilder.org', 'Lorem ipsum dolor sit amet, consectetur 
 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
 veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
 irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
 sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
 '3-1-2020', '1-15-2021'), 
 ('Sojourner', 'sojournerproject.org', 'info@sojournerproject.org', 'Lorem ipsum dolor sit amet, consectetur 
 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
 veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
 irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
 sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
 '7-31-2020', '8-1-2021'), 
 ('Tubman', 'tubman.org', 'etruscott@tubman.org', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '6-30-2020', '7-1-2021');
