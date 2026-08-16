# Group-Ten-Coffee

A simple coffee shop e-commerce website built with React, Vite, React Router, and JSON Server.

## Live Demo

https://torshow.github.io/Group-Ten-Coffee/

## Features

* Browse available coffee products
* Search coffee by name
* Filter coffee by origin
* Add new coffee products
* Edit existing coffee products
* React Router navigation
* JSON Server mock backend

## Technologies

* React
* Vite
* React Router
* JavaScript
* JSON Server
* CSS

## Project Structure

```text
src/
├── components/
│   ├── Navbar
│   ├── LocationFilter
│   ├── CoffeeCard
│   ├── CoffeeForm
│   └── EditCoffeeForm
├── pages/
│   ├── Home
│   ├── Shop
│   └── AdminPortal
├── hooks/
│   └── useCoffee
├── App.jsx
└── main.jsx
```

## Running Locally

Clone the repository:

```bash
git clone https://github.com/torshow/Group-Ten-Coffee.git
cd Group-Ten-Coffee
```

Install dependencies:

```bash
npm install
```

Start the JSON Server:

```bash
npm run server
```

The backend will run on:

```text
http://localhost:3001
```

In a second terminal, start the React application:

```bash
npm run dev
```

The application will usually be available at:

```text
http://localhost:5173
```

## Routes

* `/` - Home page
* `/shop` - Coffee shop
* `/admin` - Admin portal

## Backend

The project uses `json-server` with `db.json` as the local database.

The coffee API is available at:

```text
http://localhost:3001/coffees
```

## Deployment

The frontend is deployed on GitHub Pages:

https://torshow.github.io/Group-Ten-Coffee/

For local development, both the React application and JSON Server should be running.
