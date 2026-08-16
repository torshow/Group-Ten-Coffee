import { useState, useEffect } from 'react'

const BIN_ID = '6a81c964f5f4af5e291d17af'
const API_KEY = '$2a$10$W2tI/uEJClG5bgz6UZ.eXext9KOHXQh4zc00QSPFMXHJ4cDD/OhVW'

const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`

const HEADERS = {
  'Content-Type': 'application/json',
  ...(API_KEY ? { 'X-Master-Key': API_KEY } : {}),
}

function useCoffee() {
  const [coffees, setCoffees] = useState([])
  const [storeInfo, setStoreInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}/latest`, {
      headers: HEADERS,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data from JSONBin')
        }
        return response.json()
      })
      .then((data) => {
        const coffeeList = data.record.coffee || data.record
        setCoffees(coffeeList)
        if (data.record.store_info) {
          setStoreInfo(data.record.store_info)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  async function saveToJSONBin(updatedCoffees) {
    const payload = {
      store_info: storeInfo,
      coffee: updatedCoffees,
    }

    const response = await fetch(BASE_URL, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error('Failed to update data on JSONBin')
    }

    return response.json()
  }

  function addCoffee(newCoffee) {
    const coffeeWithId = {
      ...newCoffee,
      id: newCoffee.id || Date.now(),
    }

    const updatedList = [...coffees, coffeeWithId]

    setCoffees(updatedList)

    saveToJSONBin(updatedList).catch((err) => {
      setError(err.message)
      setCoffees(coffees)
    })
  }

  function updateCoffee(id, updatedFields) {
    const updatedList = coffees.map((coffee) =>
      coffee.id === id ? { ...coffee, ...updatedFields } : coffee
    )

    setCoffees(updatedList)

    saveToJSONBin(updatedList).catch((err) => {
      setError(err.message)
      setCoffees(coffees)
    })
  }

  return { coffees, storeInfo, isLoading, error, addCoffee, updateCoffee }
}

export default useCoffee