# Simple Todo App

A simple and responsive Todo App built with **HTML, CSS, and JavaScript** as part of my **SMIT practice work**.

The project focuses on practicing basic JavaScript concepts such as DOM manipulation, functions, conditions, events, and `localStorage`.

## Features

* User login using `localStorage`
* Add new todos
* Edit existing todos
* Delete individual todos
* Delete all todos
* Search/filter todos
* Save todos in `localStorage`
* Todos remain available after refreshing the page
* Logout functionality
* Responsive design for mobile, tablet, and desktop
* Simple and clean user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Browser Local Storage

## Project Structure

```text
Simple-Todo-App/
│
├── index.html
├── script.js
├── todo.html
├── todo.js
└── README.md
```

## How It Works

### 1. Login Page

The user enters:

* Username
* Email
* Password

The information is stored in the browser's `localStorage`.

After login, the user is redirected to the Todo App.

### 2. Add Todo

Enter a task in the input field and click **Add Todo**.

The task is added to the list and saved in `localStorage`.

### 3. Edit Todo

Click the **Edit** button on a task.

The task appears in the input field, where it can be modified and updated.

### 4. Delete Todo

Click the **Delete** button to remove an individual task.

### 5. Search Todo

Use the search field to find a specific task from the todo list.

### 6. Delete All

The **Delete All** button removes all saved todos.

### 7. Logout

The **Logout** button removes the saved login information and returns the user to the login page.

## JavaScript Concepts Practiced

This project helped me practice:

* Variables
* Functions
* `if...else`
* DOM manipulation
* `getElementById()`
* Event handling
* Input values
* String methods such as `trim()`
* Arrays
* `for` loops
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`
* Template literals
* Basic page navigation

## Responsive Design

The application is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

The layout adjusts according to the screen size using CSS media queries.

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter your login details.
5. Start adding and managing your todos.

## Purpose

This project was created as part of my **Saylani Mass IT Training (SMIT)** practice to strengthen my understanding of basic JavaScript and DOM manipulation through a real-world mini project.

## Learning Goal

The main goal of this project is to understand how JavaScript can be used to create interactive web applications while keeping the code simple and easy to understand.

## Note

This project is for learning and practice purposes. The login system uses browser `localStorage` and is **not intended for production authentication or secure password storage**.
