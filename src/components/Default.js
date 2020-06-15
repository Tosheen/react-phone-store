import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <p>The request URL <span className="text-danger">{this.props.location.pathname}</span> is not found!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;
