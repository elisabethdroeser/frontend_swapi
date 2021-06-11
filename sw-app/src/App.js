import { useState } from 'react'
import Header from "./components/Header"
import People from "./components/People"

const App = () => {
  const [people, setPeople] = useState([
      {
        id: 1,
        name: "Luke Skywalker",
        eye_color: "Blue",
        birth_year: "19 BBY",
    },
    {
      id: 2,
      name: "C-3PO",
      eye_color: "yellow",
      birth_year: "112BBY",
    },
    {
      id: 3,
      name: "R2-D2",
      eye_color: "red",
      birth_year: "33BBY"
    }
  ])
  return (
    <div className="container">
      <Header />
      <People people={people} />

    </div>
  )
}

export default App