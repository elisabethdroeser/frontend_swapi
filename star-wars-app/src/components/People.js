import React, { useRef } from 'react'

const myStyle = {
  backgroundColor: "#f4f4f4",
  margin: "5px",
  padding: "10px 20px",
}

const People = ({ people, loading }) => {
  const inputEl = useRef("");
  if(loading) {
    return <h2>Lista med personer</h2>
  };

const getSearchTerm = () => {
    console.log(inputEl.current.value);
  };

  return (
    <div>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Sök..."
            className="prompt"
            style={{padding: '5px', margin: '5px'}}
            value={people.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <ul className="list-group mb-4">
        {people.map(person => {
          return (
          <>
            <li key={person.id} style={myStyle} className="list-group-item">
              {person.name}
              <section>
                {person.birth_year}
              </section>
              <section>
                {person.gender}
              </section>
            </li>
          </>
          )
        })}
      </ul>
    </div>
  );
};

export default People