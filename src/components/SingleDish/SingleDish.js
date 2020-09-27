import React from 'react';
import './SingleDish.css';

const SingleDish = props => {
    return (
        <div className="singleDish">
            <img src={props.src}
                 alt="#"
                 className="dishImg"/>
            <div className="dishInfo">
                <h3>{props.name}</h3>
                <p>{props.price} <span>KGS</span></p>
                <button type="button"
                        className="btn"
                >Edit</button>
                <button type="button"
                        className="btn"
                >Delete</button>
            </div>
        </div>
    );
};

export default SingleDish;