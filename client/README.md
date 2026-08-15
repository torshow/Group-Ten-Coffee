Group-Ten-Coffee
A simple React e-commerce site for a coffee shop, built with Vite, React Router, and a json-server mock backend.

Component Tree
App (holds coffees state via useCoffee hook)
├── Navbar
├── Home
└── Shop (route: /shop)
│   ├── LocationFilter (search input + origin checkboxes)
│   └── CoffeeCard (one per coffee, repeated)
└── AdminPortal (route: /admin)
    ├── CoffeeForm (POST new coffee)
    └── EditCoffeeForm (PATCH existing coffee, shown per item when "Edit" is clicked)
State is lifted to App, which fetches the coffee list once with the useCoffee custom hook and passes coffees, addCoffee, and updateCoffee down as props.

Setup
Install dependencies:

npm install
Start the mock backend (in one terminal):

npm run server
This runs json-server on http://localhost:3001, reading from db.json.

Start the React app (in a second terminal):

npm run dev
Open the URL Vite prints (usually http://localhost:5173).

Routes
/ - Home page
/shop - Browse coffee, search by name, filter by origin
/admin - Add new coffee (POST) and edit existing coffee (PATCH)