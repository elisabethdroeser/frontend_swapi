import React from 'react'
  const myStyle = {
    backgroundColor: "#f4f4f4",
    margin: "5px",
    padding: "10px 20px",
  }

  const People = ({ people, loading }) => {
    if(loading) {
      return <h2>Lista med människor</h2>
    }
    return (
      <div>
        <ul className="list-group mb-4">
          {people.map(person => {
            return <li key={person.id} style={myStyle} className="list-group-item">
              {person.name}
              <section>
                {person.birth_year}
              </section>
              <section>
                {person.gender}
              </section>
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