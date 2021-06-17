import React, { useEffect, useState } from "react"
//import React, { useEffect, useState } from 'react'
import Header from "./components/Header"
import List from "./components/List"
import { fetchData } from "./utils/Api"

function App() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    fetchData().then(response => setPeople(response))
  })

  return (
    <div className="container">
      <Header />
      <List people={people} />
    </div>
  )
}

export default App