//import React, { useEffect, useState } from "react"
import React, { useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios';

//import List from "./components/List"
//import { fetchData } from "./utils/Api"

function App() {

  const apiEndpoint =' https://swapi.dev/api/people?page=1';
    useEffect(() => {
      axios
      .get(apiEndpoint)
      .then((data) => console.log(data))
    }, []);

  return (
    <div className="container">
      <Header />
      <h1>Hello people</h1>


    </div>
  )
}

export default App