import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

function Question({title,info }) {
  return ( 
    <article className='question'>
      <header className='header'>
        <h4 className='title'>{title}</h4>
        <button className='button'>btn</button>
      </header>
        <p className='info'>{info}</p>
    </article>
   );
}

export default Question;  