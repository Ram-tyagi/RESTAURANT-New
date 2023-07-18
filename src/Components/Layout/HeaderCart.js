import React from 'react'
import classes from './HeaderCart.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCart = () => {
  return (
    <div>
        <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
        Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
        </button>
    </div>
  )
}

export default HeaderCart