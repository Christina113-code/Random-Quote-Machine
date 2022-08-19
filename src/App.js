import './App.css';
import React, {useState, useEffect} from 'react';


const quotes = [
  {quoteText: '“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.” ', 
author: 'Michael Scott',},
{quoteText: '“I never thought I’d say this, but I think I ate too much bone marrow.” ', 
author: 'Dwight Schrute',},
{quoteText: '“Me think, why waste time say lot word, when few word do trick.”', 
author: 'Kevin Malone',}
]


function App() {
  
  const [quote, setquote] = useState([]);
  const [index, setIndex] = useState(0);
  
  
  function changeQuote(index){
    index===quotes.length-1? setIndex(0): setIndex(prevIndex => prevIndex + 1);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="quote-container">
          <p>{quotes[index].quoteText}</p>
          <p className="author-text">-{quotes[index].author}</p>
          <button className = "change-quote-btn" onClick = {() => changeQuote(index)}>Next Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
