import React from 'react';
import './Main.css'
import MapContainer from '../mapContainer/MapContainer';
import OrderList from '../orderList/OrderList';
import drivers from '../../../data/drivers';
import orders from '../../../data/orders';

class Main extends React.Component {
    constructor(){
        super();
        this.state= {
            currentOrder: {}
        };
        this.findDrivers= this.findDrivers.bind(this);
    }
    findDrivers= (lat, lon) => {
        this.setState({currentOrder: {lat,lon}});
    }
    render() {
        let currentOrder = this.state.currentOrder;
        return (
            <div className="main">
                <OrderList orders={orders} findDrivers={this.findDrivers}/>
                <MapContainer drivers={drivers} currentOrder={currentOrder}/>
            </div>
        )
    }
}
export default Main