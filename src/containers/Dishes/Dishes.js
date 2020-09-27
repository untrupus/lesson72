import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMenu} from "../../store/actions";
import {NavLink} from "react-router-dom";
import axiosOrder from "../../axiosOrder";
import SingleDish from "../../components/SingleDish/SingleDish";
import './Dishes.css';

const Dishes = () => {
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    const deleteItem = async (id) => {
        await axiosOrder.delete('pizza/' + id + '.json');
        dispatch(fetchMenu());
    };

    let menuList;
    if (menu === null) {
        menuList = (
            <h3>Add new pizza...</h3>
        );
    } else {
        menuList = Object.entries(menu).map(pizza => {
            return (
                <SingleDish
                    key={pizza[0]}
                    name={pizza[1].name}
                    price={pizza[1].price}
                    src={pizza[1].link}
                    del={() => deleteItem(pizza[0])}
                    id={pizza[0]}
                />
            )
        });
    }

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
            {menuList}
        </div>
    );
};

export default Dishes;