import { useState, useId, useRef, useEffect } from 'react'

function CoffeeForm({ addCoffee }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [origin, setOrigin] = useState('')
  const [price, setPrice] = useState('')

  const formId = useId()
  const nameInputRef = useRef(null)

  
  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    const newCoffee = {
      name: name,
      description: description,
      origin: origin,
      price: parseFloat(price)
    }

    addCoffee(newCoffee)

    
    setName('')
    setDescription('')
    setOrigin('')
    setPrice('')
    nameInputRef.current.focus()
  }

  return (
    <form className="styles.coffeeform" onSubmit={handleSubmit}>
      <label htmlFor={`${formId}-name`}>Coffee Name</label>
      <input
        id={`${formId}-name`}
        ref={nameInputRef}
        type="text"
        placeholder="Type here"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor={`${formId}-description`}>Description</label>
      <input
        id={`${formId}-description`}
        type="text"
        placeholder="Type here"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <label htmlFor={`${formId}-origin`}>Origin</label>
      <input
        id={`${formId}-origin`}
        type="text"
        placeholder="Type here"
        value={origin}
        onChange={(event) => setOrigin(event.target.value)}
        required
      />

      <label htmlFor={`${formId}-price`}>Price</label>
      <input
        id={`${formId}-price`}
        type="number"
        step="0.01"
        placeholder="Type here"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default CoffeeForm
