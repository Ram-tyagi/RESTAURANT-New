import react from 'react';
import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header';
function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>

    </div>
  );
}

export default App;
