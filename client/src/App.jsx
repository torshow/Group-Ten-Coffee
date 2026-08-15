import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import AdminPortal from './components/AdminPortal'
import useCoffee from './hooks/useCoffee'

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