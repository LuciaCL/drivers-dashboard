import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import apiKey from '../../../data/apiKey';

class MapContainer extends React.Component {
    
    displayDrivers = () => {
        return this.props.drivers.map((driver, index) => {
            return <Marker 
                key={index} 
                id={index} 
                position={{ lat: driver.lat, lng: driver.lon}}
                onClick={()=> alert('click')}/>
        })
    }
    render() {
        const mapStyles = {
            width: '80%',
            height: '80%',
          };
        return (
            <Map
              google={this.props.google}
              zoom={13}
              style={mapStyles}
              initialCenter={{ lat: 51.501916, lng: -0.127037}}
            >
                {this.displayDrivers()}
            </Map>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: apiKey.apiKey
  })(MapContainer);