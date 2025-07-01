import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('white');

  return (
    <>
      <div className="bg-div" style={{ backgroundColor: color }}>
        <div className="div-btn">
          <div className="btn-div">

            <button
              onClick={() => setColor("green")}
              className="btn-green"
              aria-label="Set background to green"
            >
              Green
            </button>

            <button
              onClick={() => setColor("red")}
              className="btn-red"
              aria-label="Set background to red"
            >
              Red
            </button>

            <button
              onClick={() => setColor("blue")}
              className="btn-blue"
              aria-label="Set background to blue"
            >
              Blue
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
