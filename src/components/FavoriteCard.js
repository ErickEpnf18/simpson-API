import React from 'react';
import PropTypes from 'prop-types';

const FavoriteCard = ({ item, handleDeleteFavorite, index }) => {
  return (
    <>
      <div className='row border border-primary mt-2'>
        <div className='col-4'>
          <img
            src={`${item.image}`}
            className='rounded-circle border-dark'
            key={index}
            width='50'
            height='50'
          />
        </div>
        <div className='col-6'>
          <h6>{item.character}</h6>
        </div>
      </div>
      <div className='row border border-primary'>
        <p className='text-center'>{item.quote}</p>
        <button
          className='btn btn-primary'
          onClick={() => handleDeleteFavorite({ index })}
        >
          Delete Quote
        </button>
      </div>
    </>
  );
};
FavoriteCard.propTypes = {
  item: PropTypes.shape({
    quote: PropTypes.string,
    character: PropTypes.string,
    image: PropTypes.string,
  }),
  handleDeleteFavorite: PropTypes.func,
  index: PropTypes.number,
};
export default FavoriteCard;
