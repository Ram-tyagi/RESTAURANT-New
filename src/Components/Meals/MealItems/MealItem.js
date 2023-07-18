import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}` //tofix js method price mai decimal fix karne ke liye
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
       <MealItemForm />
    </li>
  )
}

export default MealItem