import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderComponent extends React.Component {
	render() {
		return (
    <div className="headerComponent">
      <div className="mainHeading">{this.props.mainHeading}</div>
      <div className="subHeading">{this.props.subHeading}</div>
    </div>
	)
  }
};
//ReactDOM.render(<HeaderComponent mainHeading="THis" subHeading="that"/>,document.getElementById("headerDiv"));
