import React from 'react'
import { useState } from 'react'
import { } from '../components/inputs/Text';

const HookUseState = () => {
    // 1 - use state
    let userName = "Jota";

    const[name, setName] = useState("Caleb");

    // mudandos nomes
    const changeNames = () => {
        userName = "Jota Santos Primo";
        setName("Caleb Romeo")
    };

  return (
    <div>
        {/* 1 use state */}
        <h2 className='font-extrabold'>HookUseState</h2>
        <p>Várivel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames} className='bg-green-600 py-2 px-4 rounded text-white'>Mudar</button>
        <hr />

    </div>
  )
}

export default HookUseState