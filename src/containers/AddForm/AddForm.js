import React, {useState} from 'react';
import './AddForm.css';

const AddForm = () => {
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
            >Save</button>
            <button type="button"
                    className="btn"
            >Return</button>
        </div>
    );
};

export default AddForm;