import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/listings.json`)
      .then((res) => {
        const listings = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            listings.push(res.data[key]);
          });
        }
        resolve(listings);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postRequest = (listing) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/listings.json`, listing)
      .then((results) => {
        resolve(results.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {getRequest, postRequest};
