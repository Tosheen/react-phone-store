import React from 'react';

const CartItem = (props) => {
    const { contextData, item } = props;
    const { id, title, img, price, total, count} = item;
    const { increment, decrement, removeProduct } = contextData;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase">
                    <img src={img} className="img-fluid" style={{width: '5rem', height: 'auto'}} alt={title} />
                </p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase"><span className="d-lg-none">Product: </span>{title}</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase"><span className="d-lg-none">Price: </span>{price}</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div className="button-wrapper">
                        <button className="btn btn-black mx-1" onClick={() => decrement(id)}>-</button>
                    </div>
                    <div className="product-count">
                        {count}
                    </div>
                    <div className="button-wrapper">
                        <button className="btn btn-black mx-1" onClick={() => increment(id)}>+</button>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <div className="cart-icon">
                    <button onClick={() => removeProduct(id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase"><span className="d-lg-none"><strong>Total: </strong></span>${total}</p>
            </div>
        </div>
    );
}

export default CartItem;
