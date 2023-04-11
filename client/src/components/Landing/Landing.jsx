import './Landing.css';
//--------- ^^ css ^^ ----------

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='Landing'>
        <Link to="/home">
          <button id='Btn1'>BIENVENUE</button>
        </Link>
    </div>
  )
}

export default Landing;