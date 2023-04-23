import React, {useState} from 'react'
import { useContext } from 'react';
import { Context } from './App';

export default function Btn() {
    const [signin, setsignin] = useContext(Context);
    
    function set() {
        setsignin(!signin)
    }
  return (
    <div>
      <button onClick={set}>
        {
            signin ? 'yes' : 'no'
        }
      </button>
    </div>
  )
}
