import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';


function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/")
         .then((res) => {
           const { data } = res;
           setUsers(data);          
          })
         .catch((e) => {console.log(e)});
        
  }, []);

  
  return (
    <div>{users && <HomePage users={users}/>}</div>
  )
}

export default App;
