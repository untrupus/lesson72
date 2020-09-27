import React from 'react';
import './SingleOrder.css';

const SingleOrder = props => {
    return (
        <div className="singleOrder">
            <div className="orderTotal">
                {props.items}
                <p>Delivery:</p>
            </div>
            <div className="price">
                {props.price}
                <p>150 <span>KGS</span></p>
            </div>
            <div className="orderPrice">
                <p>Total price</p>
                <p><span>{props.total}</span> KGS</p>
                <button className="btn"
                        onClick={props.click}
                        >Complete order</button>
            </div>
        </div>
    );
};

export default SingleOrder;