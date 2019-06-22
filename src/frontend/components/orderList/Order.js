import React from "react";
import './Order.css';

class Order extends React.Component {
    render() {
        let order = this.props.order;
        return (
            <>
                <div className='order'>
                    <p>ID-{order.id}</p>
                    <p>Pickup time: {order.pickupTime}</p>
                    <p>Pickup address: {order.pickupAddress}</p>
                    <p>Package size: {order.packageSize}</p>
                    <button onClick={()=>this.props.findDrivers(order.lat,order.lon)}>Find drivers</button>
                </div>
            </>
        )
    }
}
export default Order;