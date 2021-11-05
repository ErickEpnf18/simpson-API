//import logo from '../styles/logo.svg';
import Card from './Card';
import Favorites from './Favorites';
import '../styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setdata] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [favorites, setfavorites] = useState([]);
  //const [character, setcharacter] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=${quantity}`
      );
      const results = await res.json();
      setdata(results);
    };
    getData();
  }, [quantity]);

  const handleNextQuote = () => {
    const value = document.getElementById('quotes').value;
    if (value >= 1 && value <= 5) {
      setquantity(value);
    }
  };
  const handleSearch = () => {
    const value = document.getElementById('quotes').value;
    if (value >= 1 && value <= 5) {
      setquantity(value);
    }
  };
  const handleAddFavorite = (positionQuote) => {
    const newQuotes = data[positionQuote.index];
    if (newQuotes) {
      //evaluated without repeated
      setfavorites((prevState) => [...prevState, newQuotes]);
    }
  };
  const handleDeleteFavorite = (positionDeleteQuote) => {
    const newDeleteQuotes = favorites.filter(
      (quote, quotePosition) => quotePosition !== positionDeleteQuote.index
    );
    setfavorites(newDeleteQuotes);
  };

  return (
    <div className='container'>
      <div className='row'>
        <h2 className='text-center'>Simpson - API</h2>
      </div>
      <div className='row'>
        <div className='col'>
          {data.length > 0 ? (
            <Card
              data={data}
              handleNextQuote={handleNextQuote}
              handleSearch={handleSearch}
              handleAddFavorite={handleAddFavorite}
            />
          ) : (
            <p>No existen coincidencias</p>
          )}
        </div>
        <div className='col'>
          <Favorites
            data={favorites}
            handleDeleteFavorite={handleDeleteFavorite}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
