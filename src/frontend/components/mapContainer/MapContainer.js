import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import apiKey from '../../../data/apiKey';
import drivers from '../../../data/drivers.json';

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drivers: drivers
        }
    }
    displayDrivers = () => {
        return this.state.drivers.map((driver, index) => {
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