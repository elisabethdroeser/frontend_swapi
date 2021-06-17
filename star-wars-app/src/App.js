//import React, { useEffect, useState } from "react"
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios';

//import List from "./components/List"
//import { fetchData } from "./utils/Api"

function App() {

  const myStyle = {
    backgroundColor: "#f4f4f4",
    margin: "5px",
    padding: "10px 20px",
  }
  const [people, updatePeople] = useState([])
  const apiEndpoint =' https://swapi.dev/api/people/';
    useEffect(() => {
      axios.get(apiEndpoint)
      .then((data) => updatePeople({...data.data }))
      //.then((data) => console.log(data))
    }, []);

  return (
    <div className="container">
      <Header />
      {people.results && people.results.map(person => (
        <div key={person.div} style={myStyle}>
          <p>{person.name}</p>
        </div>
      ))}

    </div>
  )
}

export default App