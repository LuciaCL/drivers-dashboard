import React from "react";
import Order from './Order';

class OrderList extends React.Component {
    
    render() {
        let orders = this.props.orders;
        return (
            <div className='orderList'>
                {orders.map(order => {
                return (
                  <Order
                    key={order.id}
                    order={order}
                    findDrivers={this.props.findDrivers}
                  />
                );
              })}
            </div>
        );
    }
}
export default OrderList;