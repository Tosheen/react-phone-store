import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { ProductConsumer } from '../context';
import ButtonContainer from './Button';

import styled from 'styled-components';


class ProductModal extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {
                        (value) => {
                            const { modalOpen, closeModal } = value;
                            const { img, title, price } = value.modalProduct;
                            if(!modalOpen) {
                                return null;
                            } else {
                                return (
                                    <ModalContainer>
                                        <div className="container">
                                            <div className="row">
                                                <div id="product-modal" className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-5">
                                                    <h5>Item added to the cart</h5>
                                                    <img src={img} alt="title" className="img-fluid" />
                                                    <h3>{title}</h3>
                                                    <p className="text-muted">Price: ${price}</p>
                                                    <div>
                                                        <Link to="/">
                                                            <ButtonContainer onClick={closeModal}>
                                                                Store
                                                            </ButtonContainer>
                                                        </Link>
                                                        <Link to="/cart">
                                                            <ButtonContainer cart onClick={closeModal}>
                                                                Go to Cart
                                                            </ButtonContainer>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ModalContainer>
                                );
                            }
                        }
                    }
                </ProductConsumer>
            </React.Fragment>
        );
    }
}

export default ProductModal;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;

    #product-modal {
        background: var(--main-white);
    }
`;
