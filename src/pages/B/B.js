import React from 'react'
import { useState } from 'react';

export default function Calculator() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState(number1 + number2);
    
    function calculateTotal() {
        setTotal(number1 + number2);
      }

    return (
      <div className="container text-center" style={{paddingTop: "1%"}}>
        <div className="App">
          <h1>Masukkan Dua Angka</h1>

          <div className="number-inputs mb-1 mt-3">
            <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
              type="number"
              value={number1}
              onChange={e => setNumber1(+e.target.value)}
              placeholder="0"
            />
            </div>

            <div className="number-inputs mb-3">
            <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
              type="number"
              value={number2}
              onChange={e => setNumber2(+e.target.value)}
              placeholder="0"
            />
          </div>

          <button className="rounded bg-black hover:bg-gray-400 py-2 px-4 text-white mb-3" onClick={calculateTotal}>Hitung</button>

          <h2>
          <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
              type="number"
              value={total}
              placeholder="0"
            />  
          </h2>
        </div>
    </div>
      
    )
}