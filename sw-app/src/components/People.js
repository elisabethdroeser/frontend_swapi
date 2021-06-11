import Item from "./Item"

const People = ({ people }) => {

  return (
    <>
      {people.map((item) => (
      <h3 key={item.id}>{item.name}</h3>
      ))}
    </>
  )
}

export default People