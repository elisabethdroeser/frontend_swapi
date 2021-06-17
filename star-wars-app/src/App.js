//import React, { useEffect, useState } from "react"
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios';

//import List from "./components/List"
//import { fetchData } from "./utils/Api"

function App() {

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
      <h1>Hello people</h1>
      {people.results && people.results.map(person => (
        <div key={person.div}>
          <p>{person.name}</p>
        </div>
      ))}

    </div>
  )
}

export default App