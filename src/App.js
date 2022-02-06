import React, { useState } from 'react';
import './App.css';
import data from './components/data';
import Question from './components/Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
function App ()
{
  const [ questions, setQuestion ] = useState( data );
  return (
    <main>
      <div className="container">
        <Card className="card">
          <h3>questions and answers about logins</h3>
          {questions.map( question =>
          { return <Question key={question.id} {...question} />;
          }
          )}
        </Card>     
      </div>     
    </main>
  );
}

export default App;
