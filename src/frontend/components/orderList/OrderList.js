import React from "react";
import Order from './Order';

class OrderList extends React.Component {
    constructor() {
        super();
        this.state = { orders: [] };
    }
    render() {
        let orders = this.props.orders;
        return (
            <div className='orderList'>
                {orders.map(order => {
                return (
                  <Order
                    order={order}
                  />
                );
              })}
            </div>
        );
    }
}
export default OrderList;