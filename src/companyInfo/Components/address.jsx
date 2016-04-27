import 'babel-polyfill';
import Relay from 'react-relay';

import React from 'react';
import ReactDOM from 'react-dom';

class AddressComponent extends React.Component {
	render() {
	
		var {streetAddress, city, region, postalCode} = this.props.address;

		return (
    <div className="addressComponent">
      <div className="address">{streetAddress}</div>
      <div className="address">{city}, {region} {postalCode}</div>
      <div className="address"></div>
    </div>
	)
  }
};

AddressComponent = Relay.createContainer (AddressComponent, {
	fragments: {
		address: () => Relay.QL`
      fragment on address {
            streetAddress,
						city,
						region,
						postalCode
        }
    `
	}
}
)

export default AddressComponent;
