import React, { useEffect } from "react"
import { List } from "./components/List.js";
import { fetchData } from "./utils/Api.js"

function App() {
  useEffect(() => {
    fetchData()
  })

  return (
    <div>
      <List />
    </div>
  )
}

export default App;