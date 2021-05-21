import './App.css';
import { useState } from "react";
import Search from './components/Search';


function App() {
  const [queryString, setQueryString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <h1> Hacker News Search </h1>
        <Search 
          queryString={queryString} 
          setQueryString={setQueryString}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          />
    </div>
  );
};

export default App;