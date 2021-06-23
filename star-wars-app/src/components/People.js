import React, { useRef, useState } from 'react'

const myStyle = {
  backgroundColor: "#f4f4f4",
  margin: "5px",
  padding: "10px 20px",
}

const People = ({ people, loading }) => {
  const [query, setQuery] = useState("");
  const inputEl = useRef("");
  if(loading) {
    return <h2>Lista med personer</h2>
  };

  //const [query, setQuery] = useState("");
//  };
function search (people) {
  return people.filter((person) => person.name.toLowerCase().indexOf(query) > -1)
}
  return (
    <div>
      <div className="ui search">
        <div className="ui icon input">
          <input
            //ref={inputEl}
            type="text"
            placeholder="Sök..."
            className="prompt"
            style={{padding: '5px', margin: '5px'}}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <ul className="list-group mb-4">
        {people.map(person => {
          return (
          <>
          <div>
          <section class="accordion">
            <section key={person.id} style={myStyle} className="list-group-item">
              <label for="cb_1"> {person.name}</label>
              <input id="cb_1" type="checkbox"></input>
              <section>
                <div>
                  {person.birth_year}
                </div>
                <div>
                  {person.gender}
                </div>
              </section>
            </section>
           </section>
           </div>
          </>
          )
        })}
      </ul>
    </div>
  );
};

export default People