import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import Home from './Pages/Home'
import Shop from './Pages/Shop.jsx'
import AdminPortal from './Pages/AdminPortal.jsx'
import useCoffee from './hooks/usecoffee.js'

function App() {
  const { coffees, isLoading, error, addCoffee, updateCoffee } = useCoffee()

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop coffees={coffees} isLoading={isLoading} error={error} />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminPortal
              coffees={coffees}
              addCoffee={addCoffee}
              updateCoffee={updateCoffee}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App