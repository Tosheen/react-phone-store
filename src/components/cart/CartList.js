import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const { contextData } = props;
    const { cart } = contextData;
    return (
        <div className="container-fluid">
            {
                cart.map(function (item) {
                    return <CartItem item={item} key={item.id} contextData={contextData}></CartItem>
                })
            }
        </div>
    );
}

export default CartList;
