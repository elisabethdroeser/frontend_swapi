import React from 'react'

function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0])
  return (
    <div>
      <table>
      <thead>
        <br></br>
        <tr>Namn</tr>
        <br></br>
      </thead>
      <tbody>
        {data.map(row => <tr>
          {
            columns.map(column =>
            <td>{row[column]}</td>)
          }
        </tr>)}
      </tbody>
    </table>
    </div>
  )
}

export default Datatable