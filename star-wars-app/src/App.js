import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import People from './components/People'
import Pagination from './components/Pagination'
import axios from 'axios'

function App() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const res = await axios.get('https://swapi.dev/api/people/');
      //https://swapi.dev/api/people?page=1
        setPeople(res.data.results);
        setLoading(false);
    }
    fetchPeople();
  }, []);

const [searchTerm, setSearchTerm] = useState("")
const [searchResults, setSearchResults] = useState([]);

const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [peoplePerPage] = useState(5)
const indexOfLastPeople= currentPage * peoplePerPage;
const indexOfFirstPeople = indexOfLastPeople - peoplePerPage;
const currentPeople = people.slice(indexOfFirstPeople, indexOfLastPeople);
const paginate= (pageNumber) => setCurrentPage(pageNumber)

const searchHandler = (searchTerm) => {
  setSearchTerm(searchTerm);
  if(searchTerm !== " ") {
    const newPeople = people.filter((person) => {
      console.log(Object.values(person))
    })
  }
};

  return (
    <div className="container">
      <Header />
      <People
        people={currentPeople}
        loading={loading}
        term={searchTerm}
        searchKeyword={searchHandler}
        />
      <Pagination
        peoplePerPage={peoplePerPage}
        totalPeople={people.length}
        paginate={paginate}
        />
    </div>
  )
}

export default App