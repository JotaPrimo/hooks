import React from 'react'

// hooks
import HookUseState from '../hooks/HookUseState'
import HookUseReducer from "../hooks/HookUseReducer";
import HookUseEffect from '../hooks/HookUseEffect';

import { useContext } from 'react';
import { SomeContext } from '../hooks/HookUseContenxt';

const Home = () => {
  const {contextValue} = useContext(SomeContext);
  return (
    <div>
        <HookUseState />
        <hr />
        <br /><br />
        <HookUseReducer />
        <hr />
        <br /><br />
        <HookUseEffect />
        <h2>UseContentx</h2>
        <p>Valor {contextValue}</p>
        <hr />
    </div>
  )
}

export default Home