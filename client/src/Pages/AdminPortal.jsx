import { useState } from 'react'
import CoffeeForm from './CoffeeForm'
import EditCoffeeForm from './EditCoffeeForm'

function AdminPortal({ coffees, addCoffee, updateCoffee }) {
  const [editingId, setEditingId] = useState(null)

  return (
    <div className="admin-portal">
      <div className="admin-panel">
        <h2>Add a New Coffee</h2>
        <CoffeeForm addCoffee={addCoffee} />
      </div>

      <div className="admin-panel">
        <h2>Manage Coffees</h2>
        <ul className="admin-list">
          {coffees.map((coffee) => (
            <li key={coffee.id} className="admin-list-item">
              {editingId === coffee.id ? (
                <EditCoffeeForm
                  coffee={coffee}
                  updateCoffee={updateCoffee}
                  onDone={() => setEditingId(null)}
                />
              ) : (
                <div className="admin-row">
                  <span>
                    {coffee.name} - ${coffee.price.toFixed(2)}
                  </span>
                  <button onClick={() => setEditingId(coffee.id)}>
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminPortal
