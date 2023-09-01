import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:3001/add?', { a: parseInt(number1), b: parseInt(number2) })
      .then(response => {
        setResult(response.data.result);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Addition App</h1>
      <label>
        Number 1:
        <input type="number" value={number1} onChange={e => setNumber1(e.target.value)} />
      </label>
      <br />
      <label>
        Number 2:
        <input type="number" value={number2} onChange={e => setNumber2(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAdd}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
