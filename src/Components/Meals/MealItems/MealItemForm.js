import React from 'react'

const MealItemForm = () => {
  return (
    <div>
        <label htmlFor="">Amout</label>
        <input type="number" min="1" max="5" step="1" defaultValue="1"/>
        <button>+ Add</button>
    </div>

  )
}

export default MealItemForm