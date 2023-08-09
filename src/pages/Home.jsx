import React from 'react'

// hooks
import HookUseState from '../hooks/HookUseState'
import HookUseReducer from "../hooks/HookUseReducer";
import HookUseEffect from '../hooks/HookUseEffect';

const Home = () => {
  return (
    <div>
        <HookUseState />
        <hr />
        <br /><br />
        <HookUseReducer />
        <hr />
        <br /><br />
        <HookUseEffect />
    </div>
  )
}

export default Home