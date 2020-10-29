import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';


function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/")
         .then((res) => {
           const { data } = res;
           setUsers(data);
            // const { id, email, name, phone, username, website, address, company } = data;
            // setUser({ id, email, name, phone, username, website, address, company });
          
          })
         .catch((e) => {console.log(e)});
        //  console.log("user" ,user);
        
  }, []);

  
  console.log("users", users);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
