import React, {useState} from 'react';
import axiosOrder from "../../axiosOrder";
import './AddForm.css';

const AddForm = props => {
    const [value, setValue] = useState({
        name: '',
        price: '',
        link: ''
    });

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
            await axiosOrder.post('pizza.json', value);
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
            <h2>Add new Pizza</h2>
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

export default AddForm;