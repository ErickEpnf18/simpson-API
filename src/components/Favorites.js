import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from './FavoriteCard';
const Favorites = ({ data, handleDeleteFavorite }) => {
  //   if (data.length > 0) {
  //     const initialized = () => {
  //       let newFilterQuote = [];
  //       data.forEach((item) => {
  //         newFilterQuote = item;
  //       });
  //       let result = newFilterQuote.filter((item, index) => {
  //         return newFilterQuote.indexOf(item) === index;
  //       });
  //       console.log('HERE', result);
  //       return result;
  //     };
  //     initialized();
  // }
  const [characteres, setcharacteres] = useState([]);
  const [listOnlyCharacter, setlistOnlyCharacter] = useState([]);
  useEffect(() => {
    const dataQuotes = new Set(data);
    let result = [...dataQuotes];
    setcharacteres(result);
  }, [data]);
  const handleDropdown = (indexValue) => {
    console.log('here drop', data[indexValue.index].character);
    let characterName = data[indexValue.index].character;
    let newListOnlyCharacter = [];
    data.map((item, index) => {
      if (item.character === characterName) {
        newListOnlyCharacter.push(item);
      }
    });
    console.log('list of character: ', newListOnlyCharacter);
    setlistOnlyCharacter(newListOnlyCharacter);
    newListOnlyCharacter.map((item, index) => {
      console.log(index, ': ', item.quote);
    });
  };
  return (
    <div className='text-center'>
      <h2>Favorites</h2>
      <div className='container'>
        {data.length > 0 ? (
          <div>
            <div class='dropdown'>
              <button
                class='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Characteres
              </button>
              <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                {characteres &&
                  characteres.map((item, index) => (
                    <li key={index}>
                      <a
                        class='dropdown-item'
                        href='#'
                        id='dropdown-name'
                        onClick={() => handleDropdown({ index })}
                      >
                        {item.character}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            {listOnlyCharacter.length > 0
              ? listOnlyCharacter.map((item, index) => (
                  <div key={index}>
                    <FavoriteCard
                      item={item}
                      key={index}
                      handleDeleteFavorite={handleDeleteFavorite}
                      index={index}
                    />
                  </div>
                ))
              : data.map((item, index) => (
                  <div key={index}>
                    <FavoriteCard
                      item={item}
                      key={index}
                      handleDeleteFavorite={handleDeleteFavorite}
                      index={index}
                    />
                  </div>
                ))}
            {}
          </div>
        ) : (
          <p>Empty Quotes</p>
        )}
      </div>
    </div>
  );
};
Favorites.propTypes = {
  data: PropTypes.shape({
    quote: PropTypes.string,
    character: PropTypes.string,
    image: PropTypes.string,
  }),
  handleDeleteFavorite: PropTypes.func,
};
export default Favorites;
