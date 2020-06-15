import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import ProductModal from './components/ProductModal';


function App() {
  return (
    <React.Fragment>
        <Navbar></Navbar>
        <Switch>
            <Route path="/" component={ProductList} exact></Route>
            <Route path="/details" component={Details} exact></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
        </Switch>
        <ProductModal></ProductModal>
    </React.Fragment>
  );
}

export default App;
