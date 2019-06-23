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
    }
    findDrivers= (lat, lon, id) => {
        this.setState({currentOrder: {lat, lon, id}});
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