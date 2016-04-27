import 'babel-polyfill';
import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import HeaderComponent from '../Components/header.jsx'
import AddressComponent from '../Components/address.jsx'


class ContainerComponent extends React.Component {

	showWorkLocations = (workLocation) => {
		console.log(workLocation);
		return (<AddressComponent address={workLocation.address} key={workLocation.id}></AddressComponent>)
	}
	render() {

    let mainHeading = "First, let's review your company location details";
    let subHeading = "We use this information to fill out your payroll taxes and forms.";

		var data = this.props.companyInfo;

		return (
    <div className="container">
      <HeaderComponent mainHeading={mainHeading} subHeading={subHeading}/>
      <div className="mainAddress">
        <div className="addressHeading">{data.businessName}</div>
				<AddressComponent address={data.businessAddress}></AddressComponent>
				<div className="address">{data.contact.workPhone}</div>
      </div>
      <div className="mainAddress">
        <div className="addressHeading">Other Work Locations</div>
        <div className="workLocationNodes"></div>
				{data.workLocation.map(this.showWorkLocations)}
      </div>
    </div>
	)
  }
};


ContainerComponent = Relay.createContainer(ContainerComponent, {
  fragments: {
    companyInfo: () => Relay.QL`
      fragment on company {
          businessName,
					businessAddress {
						${AddressComponent.getFragment('address')}
					},
					contact {
						workPhone
					},
					workLocation {
						id,
						address {
							${AddressComponent.getFragment('address')}
						}
					}
        }
    `,
  },
});

export default ContainerComponent;

// this.props.companyInfo.addresses.map(
// tea => <Tea tea={tea} />
// )
// <AddressComponent addressLine1="100 Main Street" addressLine2="San Francisco, CA 94105" addressLine3="408.555.1212"/>
//  <AddressComponent/>
