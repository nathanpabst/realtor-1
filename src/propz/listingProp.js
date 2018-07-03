import PropTypes from 'prop-types';

const listingShape = PropTypes.shape({
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  squareFootage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  numBeds: PropTypes.number.isRequired,
  numBaths: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  estimatedMonthlyMorgage: PropTypes.number.isRequired,
  lotInAcres: PropTypes.number.isRequired,
  yearBuilt: PropTypes.number.isRequired,
  heating: PropTypes.string.isRequired,
  cooling: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

const listingOptionalShape = PropTypes.oneOfType([
  PropTypes.shape({
    nope: PropTypes.string.isRequired,
  }),
  listingShape,
]);

export {listingShape, listingOptionalShape};
