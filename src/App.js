import axios from 'axios';
import { useState, useEffect } from 'react';
import { POKEMON_URL, BASE_URL, POPULATE } from './utils/api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + POKEMON_URL + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <>
      <h1>Welcome to the World of Pokemon</h1>
      <ul>
        {data.length > 0
          ? data.map((pokemon, idx) => {
              return <li key={idx}>{pokemon.attributes.name}</li>;
            })
          : null}
      </ul>
    </>
  );
};

export default App;
