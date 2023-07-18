import react from 'react';
import Cart from './Components/Cart/Cart';
import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header';
function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>

    </div>
  );
}

export default App;
