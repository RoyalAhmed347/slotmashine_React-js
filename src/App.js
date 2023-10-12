import './App.css';
import Slote from "./Slote"
function App() {
  return (
    <>
      <header>
        <h1>🎰Welcome to <span>Slote Mashine Game</span>🎰</h1>
      </header>
      <div className="outerSlote" >
      <Slote  x = '😄'  y = '😄'  z = '😄' />
      <Slote  x = '😄'  y = '😄'  z = '🥵' />
      <Slote  x = '🥭'  y = '🥭'  z = '🥭' />
      <Slote  x = '🥭'  y = '🥭'  z = '🍌' />
      </div>
    </>
  );
}

export default App;
