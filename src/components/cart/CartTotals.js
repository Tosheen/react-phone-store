import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = (props) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = props.contextData;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mt-2 ml-sm-5 mr-md-0 ml-md-auto text-capitalize text-right">
                        <Link to="/" className="btn btn-outline-danger text-uppercase mb-3 px-5">
                            <button onClick={() => clearCart()} style={{border: 'none', width: '100%', color: 'inherit', background: 'transparent'}}>Clear Cart</button>
                        </Link>
                        <h5 className="title">
                            Subtotal: 
                            <strong>${cartSubTotal}</strong>
                        </h5>
                        <h5 className="title">
                            Cart Tax: 
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5 className="title">
                            Cart Total: 
                            <strong>${cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotals;
