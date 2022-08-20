import './App.css';
import React, {useState} from 'react';

let colors = ['#293462','#1CD6CE','#D61C4E','#A91079','#5800FF'];

function App() {
  
  const [quote, setquote] = useState("Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.");

  const [author, setAuthor] = useState("Michael Scott");
  const [colorIndex, setColorIndex] = useState(0);
 
  let fetchData = async() => {
      const res = await fetch("https://zenquotes.io/api/random");
      const data = await res.json();
      setquote(data[0].q);
      setAuthor(data[0].a);
      setColor(colors[colorIndex]);
      setColorIndex(prevIndex => prevIndex ===colors.length-2?prevIndex =0:prevIndex + 1);
      
    
   
  }
  function setColor (newColor){
    document.documentElement.style.setProperty('--theme-color', newColor);
  }
  
  const theme_color = getComputedStyle(document.documentElement).getPropertyValue('--theme-color')
  console.log(theme_color);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="quote-container">
          <p className = "quote-text"><span>"</span>{quote}"</p>
          <p className="author-text">-{author}</p>
          <button onClick = {() => fetchData() }>Next Quote</button>
          <p>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></p>
        </div>
      </header>
    </div>
  );
}

export default App;
