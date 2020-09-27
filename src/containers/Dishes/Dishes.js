import React from 'react';
import SingleDish from "../../components/SingleDish/SingleDish";
import './Dishes.css';
import {NavLink} from "react-router-dom";

const Dishes = () => {
    return (
        <div className="dishList">
            <div className="dishHeader">
                <h4>Pizza menu</h4>
                <button type="button"
                        className="btn"
                        ><NavLink exact to='/add'
                                  className="addBtn"
                >Add new pizza</NavLink></button>
            </div>
            <SingleDish
            src="http://mobile.mypizza.kg:8081/jpg/%D0%9F%D0%B8%D1%86%D1%86%D0%B0-%D0%98%D1%82%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD%D0%BA%D0%B0.jpg"
            name="italian"
            price="450"


            />
        </div>
    );
};

export default Dishes;