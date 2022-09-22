import './App.css';
import { useEffect, useState } from 'react';
import News from './components/LoadNews/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <News></News>
      </header>
    </div>
  );
}

// function LoadNews(){
//   const [allNews, setAllNews] = useState([])
//   useEffect(()=>{
//     fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=8a81e8256bba423a843898a61adb9432')
//     .then(res => res.json())
//     .then(data => console.log(data))
//   } ,[])
//   return(
//     {

//     }
//   )
// }


export default App;
