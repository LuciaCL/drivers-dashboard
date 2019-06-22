import React from 'react';
import './Main.css'
import MapContainer from '../mapContainer/MapContainer';
import OrderList from '../orderList/OrderList';
import drivers from '../../../data/drivers';
import orders from '../../../data/orders';

function Main() {
    return (
        <div className="main">
            <OrderList orders={orders}/>
            <MapContainer drivers={drivers}/>
        </div>
    )
}
export default Main