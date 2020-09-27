import React from 'react';
import {Link} from "react-router-dom";
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
                ><Link className="edit" to={'/' + props.id + '/edit'}>Edit</Link></button>
                <button type="button"
                        className="btn"
                        onClick={props.del}
                >Delete</button>
            </div>
        </div>
    );
};

export default SingleDish;