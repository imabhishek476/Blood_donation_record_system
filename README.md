# Blood Record Management App

A simple web application for management of blood Donar. The app delivers functionalities that makes it easy
for management of a blood bank.


The Application was build using following technologies:
- ReactJs
- JavaScript
- NodeJs
- MySQL


## Features

The app incorporate following feature for different categories of user:

#### User
- Register & Login
- donate blood
- request blood

#### Admin
- Login
- Daily records
- update user health
- Handle blood request

#### Blood Bank
- Search - based on blood group or location



## Run Locally


```bash
  git clone
```

Open MySQL WorkBench and established a connection and create schema according to database.sql file and make changes in server.js according to your database connection

To start the server

```bash
  cd server
  npm install
  npm run devStart
```

To start the client

```bash
  cd client
  npm install
  npm start
```
