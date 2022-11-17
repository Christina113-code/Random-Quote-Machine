import './App.css';
import React, {useState} from 'react';

let colors = ['#293462','#1CD6CE','#D61C4E','#A91079','#5800FF'];

function App() {
  
  const [quote, setquote] = useState("Please install Allow CORS: Access-Control-Allow-Origin extension:");
  const [active, setActive] = useState(false);
  const [author, setAuthor] = useState("Christina");
  const [colorIndex, setColorIndex] = useState(0);
 
  let fetchData = async() => {
      const res = await fetch("https://zenquotes.io/api/random");
      const data = await res.json();
      try{
        if(data[0].a === "zenquotes.io"){
          setquote('Too fast! Wait 10 seconds and try again.');
          setAuthor('Christina :)')
        }
        else{
          setActive(true);
          setquote(data[0].q);
          setAuthor(data[0].a);
          setColor(colors[colorIndex]);
          setColorIndex(prevIndex => prevIndex ===colors.length-2?prevIndex =0:prevIndex + 1);
        }
      }catch(err){
        console.log(err);
        setquote('Oops something went wrong!')
      }
      
      
      
      
    
   
  }
  function setColor (newColor){
    document.documentElement.style.setProperty('--theme-color', newColor);
  }
  
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="quote-container">
          <p className = "quote-text"><span>"</span>{quote}"</p>
          {active? '': <a target='_blank' rel="noreferrer" href='https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en'>Download here</a>}
          <p className="author-text">-{author}</p>
          <button onClick = {() => fetchData() }>Next Quote</button>
          <p>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></p>
        </div>
      </header>
    </div>
  );
}

export default App;
