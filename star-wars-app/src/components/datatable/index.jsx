import React from 'react'
const myStyle = {
  backgroundColor: "#f4f4f4",
  margin: "5px",
  padding: "10px 20px",
}

function Datatable({ data }) {
  return (
    <div>
      <h2>Starwars Personer</h2>
      <ul className="list-group mb-4">
        {data.map(row => {
          return <li key={row.id}>{row.name}</li>
            })}
        </ul>
    </div>
  )
}

export default Datatable