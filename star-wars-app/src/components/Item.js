const Item = ({ item }) => {
  return (
    <div className='item'>
      <section className='accordion'>
        <label for="cb_1"><h3>{item.name}</h3></label>
        <input id="cb_1" type="checkbox"></input>
        <section>
          <p>{item.birth_year}</p>
        </section>
      </section>
    </div>
  )
}

export default Item
