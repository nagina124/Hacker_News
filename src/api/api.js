import axios from 'axios';
export const BASE_URL = 'http://hn.algolia.com/api/v1/';

//queries the Hacker News API for articles based on queryString

export async function fetchQueryResults(queryString) {

  const url = `${BASE_URL}search?query=${queryString}&tags=story`;

  try {
    const response = await axios.get(url);
    return (response.data.hits);

  } catch (error) {
    throw error;
  }

};