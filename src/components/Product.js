import React, { Component } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';

import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {
                            (value) => {
                                return (
                                    <div className="img-container p-5" onClick={() => {
                                        value.handleDetails(id);
                                    }}>
                                        <Link to="/details" style={{display: 'block'}}>
                                            <img src={img} alt={title} className="card-img-top" />
                                        </Link>
                                        <button className="cart-btn" disabled={inCart ? true: false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            { inCart ? (<p className="text-capitalize mb-0" disabled>In Cart</p>) : (<i className="fas fa-cart-plus"></i>) }
                                        </button>
                                    </div>
                                )
                            }
                        }
                        
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0"><span className="mr-1">${price}</span></h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

export default Product;

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 300ms linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 300ms linear;
    }
    .img-container {
        position: relative;
        overflow: hidden;
        img {
            transition: transform 300ms ease;
        }
        &:hover {
            img {
                transform: scale(1.2);
            }
            .cart-btn {
                transform: translateX(0)
            }
        }
    }
    .cart-btn {
        padding: 0.25rem 0.4rem;
        background-color: var(--light-blue);
        border: none;
        color: var(--main-white);
        font-size: 1.5rem;
        border-radius: 0.5rem 0 0 0;
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translateX(101%);
        transition: transform 300ms ease, color 300ms ease;
        &:hover {
            color: var(--main-blue);
            cursor: pointer;
        }
    }
    &:hover {
        .card {
            border: 1px solid rgba(0, 0, 0, .2);
            box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, .2);
        }
        .card-footer {
            background-color: rgba(247, 247, 247, 1);
        }
    }
`;
