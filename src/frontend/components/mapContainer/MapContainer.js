import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import apiKey from '../../../data/apiKey';
import truck from '../../images/truck-solid.svg';
import nearestTruck from '../../images/truck-close.svg';
import box from '../../images/box-open-solid.svg';

class MapContainer extends React.Component {
   rad(x) {return x*Math.PI/180;}
   findNearestDrivers(orderLat,orderLng){
      let drivers = this.props.drivers;
      let R = 6371; // radius of earth in km
      let distances = [];
      for( let i=0; i<drivers.length; i++ ) {
          let mlat = drivers[i].lat;
          let mlng = drivers[i].lon;
          let dLat  = this.rad(mlat - orderLat);
          let dLong = this.rad(mlng - orderLng);
          let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(this.rad(orderLat)) * Math.cos(this.rad(orderLat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
          let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          let d = R * c;
          distances[i] = {driver: drivers[i],distance: d};
      }
    return distances.sort((distanceA,distanceB)=>{return distanceA.distance - distanceB.distance});
  }
    displayDrivers = () => {
        return this.props.drivers.map((driver, index) => {
            return <Marker 
                key={index} 
                id={index} 
                position={{ lat: driver.lat, lng: driver.lon}}
                onClick={()=> alert('click')}
                icon= {truck}
                
              />
        })
    }
    displayOrder = () => {
      let order = this.props.currentOrder;
      return <Marker 
        position={{lat: order.lat, lng: order.lon}}
        icon={box}
        />
    }
    displayNearestDriversTo = () => {
      let order = this.props.currentOrder;
      let nearestDrivers = this.findNearestDrivers(order.lat, order.lon);
      console.log(nearestDrivers);
      return <Marker 
        position={{lat: nearestDrivers[0].driver.lat, lng: nearestDrivers[0].driver.lon}}
        icon={nearestTruck}
        />
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
                {this.displayOrder()}
                {this.displayNearestDriversTo()}
            </Map>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: apiKey.apiKey
  })(MapContainer);