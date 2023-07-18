import React from 'react'
import classes from './Header.module.css'
import HeaderCart from './HeaderCart'
import mealsImage from '../../assets/meals.jpg'

const Header = () => {
  return (
    <>
        <header className={classes.header}>
          <h1>React Meals</h1>       
          <HeaderCart />    
            
          
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </>
  )
}

export default Header