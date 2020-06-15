import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

class Cart extends Component {
    render() {
        return (
            <section className="container-fluid">
                <ProductConsumer>
                    {
                        (value) => {
                            const { cart } = value;
                            if(cart.length) {
                                return (
                                    <React.Fragment>
                                        <Title name="Your" title="Cart"></Title>
                                        <CartColumns></CartColumns>
                                        <CartList contextData={value}></CartList>
                                        <CartTotals contextData={value} history={this.props.history}></CartTotals>
                                    </React.Fragment>
                                )
                            } else {
                                return <EmptyCart />
                            }
                        }
                    }
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;
