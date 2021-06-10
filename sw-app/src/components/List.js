import React from "react"

export const List = ({ people }) => {
  return (
    <div>
      <h1>List</h1>
      <ul>
        {people.map(person => {
          return <li key={person.name}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}