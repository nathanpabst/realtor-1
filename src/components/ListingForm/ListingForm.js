import React from 'react';

import './ListingForm.css';

class ListingForm extends React.Component {
  state = {
    newListing: {
      address: '',
      city: '',
      squareFootage: 0,
    },
  }

  formFieldStringState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value;
    this.setState({newListing: tempListing});
  }

  formFieldNumberState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value * 1;
    this.setState({newListing: tempListing});
  }

  addressChange = (e) => {
    this.formFieldStringState('address', e);
  }

  cityChange = (e) => {
    this.formFieldStringState('city', e);
  }

  squareFootageChange = (e) => {
    this.formFieldNumberState('squareFootage', e);
  }

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    e.preventDefault();
    onSubmit(this.state.newListing);
  }

  render () {
    const {newListing} = this.state;

    return (
      <div className="ListingForm col-xs-8 col-xs-offset-2">
        <h2 className="text-center">Submit new property</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="address"
                placeholder="1234 Main Street"
                value={newListing.address}
                onChange={this.addressChange}
              />
            </fieldset>

            <fieldset className="col-xs-3">
              <label htmlFor="city">City:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="city"
                placeholder="Boulder"
                value={newListing.city}
                onChange={this.cityChange}
              />
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="squareFootage">Square Footage:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="squareFootage"
                placeholder="123"
                value={newListing.squareFootage}
                onChange={this.squareFootageChange}
              />
            </fieldset>
          </div>

          <button className="col-xs-6 btn btn-danger col-xs-offset-3">Save House</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
