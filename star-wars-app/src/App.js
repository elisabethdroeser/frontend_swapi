import React, { useEffect, useState } from "react"
import Header from "./components/Header"
//import List from "./components/List"
import { fetchData } from "./utils/Api"

function App() {
  const [people, setPeople] = useState(0);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetchData();
    }, []);



  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App