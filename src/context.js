import React, { Component } from 'react';

import { storeProducts, detailProduct } from './data';

var ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            modalOpen: false ,
            modalProduct: detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        };
        
        this.setProducts = this.setProducts.bind(this);
        this.getProduct = this.getProduct.bind(this);
        this.handleDetails = this.handleDetails.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.clearCart = this.clearCart.bind(this);
        this.addTotals = this.addTotals.bind(this);
    }
    getProduct(id) {
        const product = this.state.products.find(function (product) {
            return product.id === id;
        });

        return product;
    }
    handleDetails(id) {
        const product = this.getProduct(id);
        this.setState({
            detailProduct: product
        });
    }
    addToCart(id) {
        let tempProducts = [...this.state.products];
        let productIndex = null;
        tempProducts.forEach(function(product, index) {
            if(product.id === id) {
                productIndex = index;
            }
        });

        let product = tempProducts[productIndex];
        product.inCart = true;
        product.count = 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.addTotals();
            //products: tempProducts,
            //console.log(this.state);
        });
    }
    setProducts() {
        let productsList = [];
        storeProducts.forEach(function (product) {
            const singleProduct = { ...product }
            productsList.push(singleProduct);
        });
        this.setState({
            products: productsList
        });
    }
    openModal(id) {
        const product = this.getProduct(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            };
        });
    }
    closeModal() {
        this.setState({
            modalOpen: false
        });
    }
    increment(id) {
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(function (product) {
            return product.id === id;
        });

        const productIndex = tempCart.indexOf(selectProduct);
        const product = tempCart[productIndex];
        product.count+= 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
        });
    }
    decrement(id) {
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(function (product) {
            return product.id === id;
        });

        const productIndex = tempCart.indexOf(selectProduct);
        const product = tempCart[productIndex];
        if(product.count > 1) {
            product.count-= 1;
            product.total = product.count * product.price;
    
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
            });
        } else {
            this.removeProduct(id);
        }
    }
    removeProduct(id) {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(function (product) {
            return product.id !== id;
        });

        const productIndex = tempProducts.indexOf(this.getProduct(id));
        let removedProduct = tempProducts[productIndex];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        });
    }
    clearCart() {
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.setProducts();
            this.addTotals();
        });
    }
    addTotals() {
        let subTotal = 0;
        this.state.cart.map(function (item) {
            return subTotal+= item.total;
        });
        const tax = parseFloat((subTotal * 0.1).toFixed(2));
        const total = subTotal + tax;
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        });
    }
    componentDidMount() {
        this.setProducts();
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeProduct: this.removeProduct,
                clearCart: this.clearCart
            }}>
                { this.props.children }
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
