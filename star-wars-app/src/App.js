import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Datatable from './components/datatable'

require("es6-promise").polyfill()
require("isomorphic-fetch")

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://swapi.dev/api/people/');
      //https://swapi.dev/api/people?page=1
        setData(response.data.results);
        //setData(response.data.results);
        //setLoading(false);
    }
    fetchData();
  }, []);
  //  fetch("https://swapi.dev/api/people/?page")
  //  //fetch("https://swapi.dev/api/people/?page={id}&format=json")
  //  .then(response => response.json())
  //  .then(json => setData(json))
  //  .then(results => setPeople())
  //}, [])
  ////second argument, dependencies,
function search(rows) {
  return rows.filter(row => row.name.toLowerCase().indexOf(query) > -1);
}

  return (
    <div className="container">
      <Header />
      <br></br>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}>
        </input>
      </div>
      <div>
        <Datatable data={search(data)}
        />
      </div>
    </div>
  );
}

export default App