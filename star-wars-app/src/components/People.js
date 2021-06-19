import React from 'react'

const People = ({ people, loading }) => {
  if(loading) {
    return <h2>Lista med människor</h2>
  }
  return (
    <div>
      <h2>Starwars</h2>
      <ul className="list-group mb-4">
        {people.map(person => {
          return <li key={person.id} className="list-group-item">
            {person.name}
            {person.birth_year}
          </li>
        })}
      </ul>
    </div>
  )
}

export default People




//const People = ({ people }) => {
//  return (
//    <div>
//      <h2>Starwars personer</h2>
//      <ul>
//        {people.map(person => {
//          return <li key={person.id}>{person.name}</li>
//        })}
//      </ul>
//    </div>
//  )
//}

//export default People