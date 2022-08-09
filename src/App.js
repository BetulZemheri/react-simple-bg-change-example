import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  // const [renk, setRenk] = useState();
  const renkDegisimi = useRef(null);

  const degisim = () => {
    document.body.style.backgroundColor = renkDegisimi.current.value;
    // setRenk(() => renkDegisimi.current.value)
  }

  return (
    <div className="App">
      <p>Enter Color In English</p>
      <input type="text" ref={renkDegisimi} onChange={degisim} />
      {/* <p> {renk} </p> */}
    </div>
  );
}

export default App;
