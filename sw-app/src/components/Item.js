const Item = ({ item }) => {
  return (
    <div className='item'>
      <section className='accordion'>
        <label for="cb"><h3>{item.name}</h3></label>
        <input id="cb" type="checkbox"></input>
        <section>
          <p>{item.birth_year}</p>
        </section>
      </section>
    </div>
  )
}

export default Item
