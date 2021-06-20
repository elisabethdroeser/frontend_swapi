import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import People from './components/People'
import Pagination from './components/Pagination'
import axios from 'axios'

//import List from "./components/List"
//import { fetchData } from "./utils/Api"

function App() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [peoplePerPage] = useState(5)
  //const [peoplePerPage, setPeoplePerPage] = useState(5)

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const res = await axios.get('https://swapi.dev/api/people/');
      setPeople(res.data.results);
      setLoading(false);
    }
    fetchPeople();
  }, []);

//console.log(people);

  //const myStyle = {
  //  backgroundColor: "#f4f4f4",
  //  margin: "5px",
  //  padding: "10px 20px",
  //}
  //const [people, updatePeople] = useState([])
  //const apiEndpoint = 'https://swapi.dev/api/people/';
  //  useEffect(() => {
  //    axios.get(apiEndpoint)
  //    .then((data) => updatePeople({...data.data }))
  //    //.then((data) => console.log(data))
  //  }, []);
//

const indexOfLastPeople= currentPage * peoplePerPage;
const indexOfFirstPeople = indexOfLastPeople - peoplePerPage;
const currentPeople = people.slice(indexOfFirstPeople, indexOfLastPeople);
const paginate= (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <Header />
      <People
        people={currentPeople}
        loading={loading} />
      <Pagination
        peoplePerPage={peoplePerPage}
        totalPeople={people.length}
        paginate={paginate} />
    </div>
  )
}

export default App