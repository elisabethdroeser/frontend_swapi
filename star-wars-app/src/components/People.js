import React from 'react'
//import Item from ".components/Item"

const People = ({ people }) => {
  return (
    <div>
      <h2>Starwars personer</h2>
      <ul>
        {people.map(person => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default People