import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Datatable from './components/datatable'
import Pagination from './components/Pagination'

require("es6-promise").polyfill()
require("isomorphic-fetch")

function App() {
  const [ data, setData ] = useState([])
  const [ query, setQuery   ] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await
      axios.get('https://swapi.dev/api/people/?=page${pagenumber)');
      //console.log(response.data)
        setData(response.data.results);
    }
    fetchData();
  }, []);

   //"next": "https://swapi.dev/api/people/?page=2",
    //next: "https://swapi.dev/api/people/?=page%24%7Bpagenumber%29&page=2"
    //previous: null
    //"previous": null

function search(rows) {
  return rows.filter(row => row.name.toLowerCase().indexOf(query) > -1);
  }

  return (
    <div className="container">
      <Header />
      <br></br>
      <div className="ui icon input">
        <input
          type="text"
          value={query}
          style={{padding: '5px', margin: '5px'}}
          placeholder="Sök..."
          className="prompt"
          onChange={(e) => setQuery(e.target.value)}>
        </input>
        <i className="search icon"></i>
      </div>
      <div>
        <Datatable data={search(data)}
        />
      </div>
    <Pagination />
    </div>
  );
}

export default App