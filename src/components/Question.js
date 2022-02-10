import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
// import {Card} from 'react-bootstrap'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

function Question ( { title, info } )
{
  const [showInfo, setShowInfo] = useState(false)
  return ( 
    <Card className="main">
    <article>
      <header className='header'>
        <h4 className='title'>{title}</h4>
          <button className='button' onClick={() => setShowInfo( !showInfo )}>{ showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </header>
        { showInfo && <p className='info'>{info}</p>}
    </article>
    </Card>
   );
}

export default Question;  