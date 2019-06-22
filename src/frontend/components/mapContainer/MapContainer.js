import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import apiKey from '../../../data/apiKey';

class MapContainer extends React.Component {
    
    render() {
        const mapStyles = {
            width: '80%',
            height: '80%',
          };
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 51.534258, lng: -0.126340}}
            />
        );
      }
}
export default GoogleApiWrapper({
    apiKey: apiKey.apiKey
  })(MapContainer);