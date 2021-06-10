import React, { useEffect, useState } from "react"
import { List } from "./components/List.js"
import { fetchData } from "./utils/Api.js"

function App() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetchData().then(response => setPeople(response))
  })

  return (
    <div>
      <List people={people} />
    </div>
  )
}

export default App