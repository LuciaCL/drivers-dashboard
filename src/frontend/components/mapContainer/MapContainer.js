import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import distanceUtils from '../../utils/distanceUtils';
import apiKey from '../../../data/apiKey';
import truck from '../../images/truck-solid.svg';
import nearestTruck from '../../images/truck-close.svg';
import box from '../../images/box-open-solid.svg';
import './MapContainer.css';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUpdate: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentOrder.id !== prevProps.currentOrder.id) {
      //should update
      this.setState({ shouldUpdate: true });
    }
  }
  
  displayDrivers = () => {
    return this.props.drivers.map((driver, index) => {
      return <Marker
        key={index}
        id={index}
        position={{ lat: driver.lat, lng: driver.lon }}
        onClick={() => alert('click')}
        icon={truck}

      />
    })
  }

  displayOrder = () => {
    let order = this.props.currentOrder;
    return <Marker
      position={{ lat: order.lat, lng: order.lon }}
      icon={box}
    />
  }

  displayNearestDriversTo = () => {
    let order = this.props.currentOrder;
    let nearestDrivers = distanceUtils.findNearestDrivers(order.lat, order.lon, this.props.drivers);
    return nearestDrivers.slice(0, 3).map((driver, index) => {
      return <Marker
        position={{ lat: driver.driver.lat, lng: driver.driver.lon }}
        icon={nearestTruck}
      />
    })
  }

  render() {
    return (
      <div className='mapContainer'>
        <Map
          google={this.props.google}
          zoom={13}
          style={{width: '100%', height: '100%'}}
          initialCenter={{ lat: 51.501916, lng: -0.127037 }}>

          {this.displayDrivers()}
          {this.state.shouldUpdate ? this.displayOrder() : ''}
          {this.state.shouldUpdate ? this.displayNearestDriversTo() : ''}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: apiKey.apiKey
})(MapContainer);