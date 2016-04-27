
import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import ContainerComponent from '../Components/container.jsx'


class HomeRoute extends Relay.Route {
  static routeName = 'Home';
  static queries = {
    companyInfo: (Component) => Relay.QL`
      query companyInfo {
        companyInfo {
          ${Component.getFragment('companyInfo')}
        }
      }
    `
  };
}
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://localhost:1122/graphql')
);
// ReactDOM.render(<ContainerComponent companyName="Andrea's Hot Chocolate"/>,document.getElementById("containerDiv"));
ReactDOM.render(<Relay.RootContainer
                    Component={ContainerComponent}
                    route={new HomeRoute()} />,
                  document.getElementById("containerDiv"));
