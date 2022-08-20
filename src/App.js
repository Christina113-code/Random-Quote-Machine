import './App.css';
import React, {useState, useEffect} from 'react';



function App() {
  
  const [quote, setquote] = useState("Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.");

  const [author, setAuthor] = useState("Michael Scott");
  let fetchData = async() => {
      
      const res = await fetch("https://zenquotes.io/api/random");
      const data = await res.json();
      setquote(data[0].q);
      setAuthor(data[0].a);
    
   
  }
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="quote-container">
          <p className = "quote-text"><span>"</span>{quote}"</p>
          <p className="author-text">-{author}</p>
          <button onClick = {() => fetchData()}>Next Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
