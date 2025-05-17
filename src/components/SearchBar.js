import React, {useState } from 'react'
import "../styles/searchBar.css";
import { FaSearch } from 'react-icons/fa'

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
export default function SearchBar({setResults}) {
  const [input, setInput] = useState("");
  const [filteredResults, setFilteredResults] = useState(users);

  const handleSearch = (value) => {
    setInput(value);
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon"/>
      <input placeholder="Type to search..." value={input} onChange={(e) => handleSearch(e.target.value)}/>
      <ul>
        {filteredResults.length > 0 && input.trim() ? (
          filteredResults.map((user)=> <li key={user.id}>{user.name}</li>)
        ): null}
      </ul>
    </div>
  );
}
