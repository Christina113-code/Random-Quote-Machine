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
  
  const [quote, setquote] = useState("“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.”");
  const [index, setIndex] = useState(0);
  const [author, setAuthor] = useState("Michael Scott");
  // useEffect(() => {
  //   fetchData();
  // });
  let fetchData = async() => {
    const res = await fetch("https://zenquotes.io/api/random");
    const data = await res.json();
    setquote(data[0].q);
    setAuthor(data[0].a);
  }
  
  
  function changeQuote(index){
    index===quotes.length-1? setIndex(0): setIndex(prevIndex => prevIndex + 1);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="quote-container">
          <p>{quote}</p>
          <p className="author-text">-{author}</p>
          <button onClick = {() => fetchData()}>Next Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
