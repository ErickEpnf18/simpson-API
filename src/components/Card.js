import React from 'react';
import '../styles/skeleton.css';
import PropTypes from 'prop-types';
const Card = ({ data, handleNextQuote, handleSearch, handleAddFavorite }) => {
  return (
    <div className='text-center'>
      <h2>Cards</h2>
      <div className='container'>
        <select
          class='form-select'
          id='quotes'
          aria-label='Default select example'
          name='quotes'
        >
          <option selected>Select quantity of quotes</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
          <option value='4'>Four</option>
          <option value='5'>Five</option>
        </select>
        <div className='row mt-1'>
          <div className='col'>
            <button className='btn btn-primary' onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className='col'>
            <button className='btn btn-primary' onClick={handleNextQuote}>
              Next
            </button>
          </div>
        </div>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <div className='row border border-primary mt-2'>
            <div className='col-4'>
              {item.image ? (
                <img
                  src={`${item.image}`}
                  className='rounded-circle border-dark'
                  key={index}
                  width='50'
                  height='50'
                />
              ) : (
                <img class='header-img skeleton' />
              )}
            </div>
            <div className='col-6'>
              <h6>{item.character}</h6>
            </div>
          </div>
          <div className='row border border-primary'>
            <p className='text-center'>{item.quote}</p>
            <button
              className='btn btn-primary'
              onClick={() => handleAddFavorite({ index })}
            >
              Add Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    quote: PropTypes.string,
    character: PropTypes.string,
    image: PropTypes.string,
  }),
  handleNextQuote: PropTypes.func,
  handleSearch: PropTypes.func,
  handleAddFavorite: PropTypes.func,
};
export default Card;
