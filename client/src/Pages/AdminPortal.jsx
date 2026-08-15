import { useState } from 'react'
import CoffeeForm from '../Components/CoffeeForm'
import EditCoffeeForm from '../Components/EditCoffeeForm'


function AdminPortal({ coffees, addCoffee, updateCoffee }) {
  const [editingId, setEditingId] = useState(null)

  return (
    <div className="styles.adminportal">
      <div className="styles.adminpanel">
        <h2>Add a New Coffee</h2>
        <CoffeeForm addCoffee={addCoffee} />
      </div>

      <div className="styles.adminpanel">
        <h2>Manage Coffees</h2>
        <ul className="styles.adminlist">
          {coffees.map((coffee) => (
            <li key={coffee.id} className="styles.adminlistitem">
              {editingId === coffee.id ? (
                <EditCoffeeForm
                  coffee={coffee}
                  updateCoffee={updateCoffee}
                  onDone={() => setEditingId(null)}
                />
              ) : (
                <div className="styles.adminrow">
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
