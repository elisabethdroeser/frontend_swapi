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
          return (
          <>
            <div>
              <section class="accordion">
               <section key={row.id} style={myStyle} className="list-group-item">
                <label for="cb-1">{row.name}</label>
                <input id="cb_1" type="checkbox"></input>
                <div>
                  {row.birth_year}
                </div>
                <div>
                  {row.gender}
                </div>
                </section>
              </section>
            </div>
          </>
          )
          })}
        </ul>
    </div>
  )
}

export default Datatable