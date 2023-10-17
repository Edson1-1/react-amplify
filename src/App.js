import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if(res.data){
          setPosts(res.data);
        }
      } catch (error) {
        console.error('error while fetching data from json palceholder', error);
      }
    }

    fetchData();
  })


  return (
    <div className="App">
      <header className="App-header">
        
          Learn React
          {posts.map( (item) => {
            return <p>{item.title}</p>
          })}
      </header>
    </div>
  );
}

export default App;
