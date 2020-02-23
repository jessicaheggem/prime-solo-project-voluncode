# Prime Project
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and tables

Create a new database called `voluncode` and create a `user`, `project`, & `user_project` table. Insert the test data into the project table so you have some information to start with:

```SQL
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
VALUES ('Test Organization', 'website.org', 'website@email.org', 'Lorem ipsum dolor sit amet, 
 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
 aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
 laborum.', '1-1-2020', '12-31-2020'),
```

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum. 

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
    1. `POST /api/user/register` registers a new user, see body to change username/password
    2. `POST /api/user/login` will login a user, see body to change username/password
    3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

* src/components
  * App/App
  * AvailableProjects/AvailableProjects
  * Confirmation/Confirmation
  * EditConfirmation/EditConfirmation
  * EditProfile/EditProfile
  * Footer/Footer
  * Nav/Nav
  * HomePage/HomePage
  * InfoPage/InfoPage
  * UserPage/UserPage
  * LoginPage/LoginPage
  * ProjectInfo/ProjectInfo
  * SelectedProject/SelectedProject
  * RegisterPage/RegisterPage
  * LogOutButton/LogOutButton
  * ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create a Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
7. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
