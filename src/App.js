import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";
import TheHeader from "./components/layots/TheHeader";

const App = () => {
  const [searchField, setSearchField] = useState(''); //value,setValue. searchFiled has '' as default value
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState(people);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setPeople(users));
  }, []); //we render it,when sometthing in Array is changing

  useEffect(() => {
    const newFilteredPeople = people.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredPeople(newFilteredPeople);
  }, [people, searchField]); //we render it,when sometthing in Array is changing

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <TheHeader />
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search user"
        className="users-search-box"
      />
      <CardList people={filteredPeople} />
    </div>
  );
};


export default App;
