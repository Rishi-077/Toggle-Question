import React, { useState } from 'react';
import './App.css';
import data from './components/data';
import Question from './components/Question';
import 'bootstrap/dist/css/bootstrap.min.css';

function App ()
{
  const [ questions, setQuestion ] = useState( data );
  return (
    <main>
      <div className="container">
        <div className="card">
          <h3>questions and answers about logins</h3>
          {questions.map( question =>
          { return <Question key={question.id} {...question} />;
          }
          )}
        </div>     
      </div>     
    </main>
  );
}

export default App;
