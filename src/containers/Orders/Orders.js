import React, {useEffect} from 'react';
import SingleOrder from "../../components/SingleOrder/SingleOrder";
import {useDispatch, useSelector} from "react-redux";
import {fetchMenu, fetchOrders} from "../../store/actions";
import axiosOrder from "../../axiosOrder";
import './Orders.css';

const Orders = () => {
    const orders = useSelector(state => state.orders);
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenu());
    });

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const deleteOrder = async (id) => {
        await axiosOrder.delete('orders/' + id + '.json');
        dispatch(fetchOrders());
    };
    let ordersList;
    if (menu !== {}) {
         ordersList = Object.entries(orders).map(order => {
            const orderItem = Object.entries(order[1]).map(item => {
                return (
                    <p key={menu[item[0]].name}>{menu[item[0]].name} x {item[1]}</p>
                )
            });
            const itemPrice = Object.entries(order[1]).map(item => {
                return (
                    <p key={menu[item[0]].name}>{menu[item[0]].price * item[1]} <span>KGS</span></p>
                )
            });
            let total = [];
            Object.entries(order[1]).map(item => {
                total.push(menu[item[0]].price * item[1]);
            });
            const totalPrice = total.reduce((sum, current) => {
                return sum + current;
            }, 0);
            return (
                <SingleOrder
                    price={itemPrice}
                    items={orderItem}
                    key={order}
                    total={totalPrice + 150}
                    click={() => deleteOrder(order[0])}
                />
            )
        });
    }


    return (
        <div className="orders">
            {ordersList}
        </div>
    );
};

export default Orders;