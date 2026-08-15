import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/coffee'

function useCoffee() {
  const [coffees, setCoffees] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

 
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  
  function addCoffee(newCoffee) {
    fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCoffee)
    })
      .then((response) => response.json())
      .then((savedCoffee) => {
        setCoffees((oldCoffees) => [...oldCoffees, savedCoffee])
      })
      .catch((err) => setError(err.message))
  }

  
  function updateCoffee(id, updatedFields) {
    fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields)
    })
      .then((response) => response.json())
      .then((updatedCoffee) => {
        setCoffees((oldCoffees) =>
          oldCoffees.map((coffee) =>
            coffee.id === updatedCoffee.id ? updatedCoffee : coffee
          )
        )
      })
      .catch((err) => setError(err.message))
  }

  return { coffees, isLoading, error, addCoffee, updateCoffee }
}

export default useCoffee
