//import React, { useEffect, useState } from "react"
import React, { useState } from 'react'
import Axios from 'axios'
import Header from './components/Header'

//import List from "./components/List"
//import { fetchData } from "./utils/Api"

function App() {
  const [people, setPeople] = useState("")


  const getPeople = () => {
    Axios
    .get('https://swapi.dev/api/people/')
    .then((response) => console.log(response.data.results))
    //.then(({ data:results }) => console.log(results))
  }



  //const [people, setPeople] = useState(0);
  /*const [person, setPerson] = useState(null);

  useEffect(() => {
    fetchData();
    }, []);
*/


  return (
    <div className="container">
      <Header />
      <button onClick={getPeople}>Get People</button>{people}


    </div>
  )
}

export default App