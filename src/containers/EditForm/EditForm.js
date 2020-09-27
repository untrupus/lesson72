import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axiosOrder from "../../axiosOrder";

const EditForm = props => {
    const menu = useSelector(state => state.menu);
    const id = props.match.params.id;

    const [value, setValue] = useState({
        name: '',
        price: '',
        link: ''
    });

    useEffect(() => {
        setValue(menu[id]);
    }, [menu, id]);

    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setValue(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const savePizza = async () => {
        if (value.name !== '' && value.price !== '' && value.link !== '') {
            await axiosOrder.put('pizza/' + id + '.json', value);
            props.history.push({
                pathname: '/'
            });
        } else {
            alert("Fill in all fields");
        }
    };

    const clear = () => {
        const newValue = {
            name: '',
            price: '',
            link: '',
        };
        setValue(newValue);
        props.history.push({
            pathname: '/'
        });
    };
    return (
        <div className="addForm">
            <h2>Edit {value.name} Pizza</h2>
            <p className="inputDescription">Name:
                <input
                    placeholder="enter name"
                    name="name"
                    className="field"
                    value={value.name}
                    onChange={onChangeHandler}
                /></p>
            <p className="inputDescription">Price:
                <input
                    placeholder="enter price"
                    name="price"
                    className="field"
                    value={value.price}
                    onChange={onChangeHandler}
                /></p>
            <p className="inputDescription">Link:
                <input
                    placeholder="enter link"
                    name="link"
                    className="field"
                    value={value.link}
                    onChange={onChangeHandler}
                /></p>
            <button type="button"
                    className="btn"
                    onClick={savePizza}
            >Save</button>
            <button type="button"
                    className="btn"
                    onClick={clear}
            >Return</button>
        </div>
    );
};

export default EditForm;