import {useState} from 'react';
import CartProvider from './Store/CartProvider';
import Cart from './Components/Cart/Cart';
import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header';
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>

    </CartProvider>
  );
}

export default App;
