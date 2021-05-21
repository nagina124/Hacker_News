import './Search.css';
import { fetchQueryResults } from '../api/api';
import { useSelector, useDispatch } from 'react-redux';
import { addQuery } from '../searchQuerySlice';

const Search = ({ 
  queryString,
  setQueryString,
  searchResults,
  setSearchResults
}) => {

  const dispatch = useDispatch();
  const queries = useSelector((state) => state.searchQuery.queries);

  return (
     <div>
      <form id="search" onSubmit={async (event) => {
        event.preventDefault();
        try {
          const response = await fetchQueryResults({ queryString });
          setSearchResults(response);
          dispatch(addQuery(queryString));
        } catch (error) {
          console.error(error);
        }

      }}>
        <fieldset>
          <label htmlFor="keywords"> Search </label>
          <input 
            id="keywords" 
            type="text" 
            placeholder="enter keywords..." 
            value={ queryString } 
            onChange={(event) => {
              const request = event.target.value;
              setQueryString(request);
            }}
          />
        </fieldset>
      </form>
      <section>
        <h4> Results </h4>
        <div>
          {
            searchResults.map((article, index) => {
              return (
                <div key={ index }> 
                  <ul>
                    <a href={ article.url }> { article.title } </a>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </section>
      <section> 
        <h4> Search History </h4>
        <div>
          {
            queries.map((query, index) => {
              return (
                <ul key={ index }>
                  <li> { query } </li>
                </ul>
              )
            })
          }
        </div>
      </section>
  </div> 
  )
};

export default Search;