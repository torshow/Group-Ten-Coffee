import { useState, useId } from 'react'

function EditCoffeeForm({ coffee, updateCoffee, onDone }) {
  const [name, setName] = useState(coffee.name)
  const [description, setDescription] = useState(coffee.description)
  const [origin, setOrigin] = useState(coffee.origin)
  const [price, setPrice] = useState(coffee.price)

  const formId = useId()

  function handleSubmit(event) {
    event.preventDefault()

    updateCoffee(coffee.id, {
      name: name,
      description: description,
      origin: origin,
      price: parseFloat(price)
    })

    onDone()
  }

  return (
    <form className="coffeeform editform" onSubmit={handleSubmit}>
      <label htmlFor={`${formId}-name`}>Coffee Name</label>
      <input
        id={`${formId}-name`}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor={`${formId}-description`}>Description</label>
      <input
        id={`${formId}-description`}
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <label htmlFor={`${formId}-origin`}>Origin</label>
      <input
        id={`${formId}-origin`}
        type="text"
        value={origin}
        onChange={(event) => setOrigin(event.target.value)}
        required
      />

      <label htmlFor={`${formId}-price`}>Price</label>
      <input
        id={`${formId}-price`}
        type="number"
        step="0.01"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />

      <div className="editformbuttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onDone}>
          Cancel
        </button>
      </div>
    </form>
    
  )
}

export default EditCoffeeForm