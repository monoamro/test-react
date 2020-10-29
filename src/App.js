import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
         .then((res) => {
           const { data } = res;
           console.log(data);
          })
         .catch((e) => {console.log(e)});
  }, []);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
