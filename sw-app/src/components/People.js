import Item from "./Item"

const People = ({ people }) => {
  return (
    <>
      {people.map((item) => (
      <Item key={item.id} item={item}/>
      ))}
    </>
  )
}

export default People