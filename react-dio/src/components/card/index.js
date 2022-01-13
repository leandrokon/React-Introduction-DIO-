import { useState } from 'react';
const Card = () => {

    const [value, setValue] = useState(0)

    function Add() {
        setValue(value + 1)
    }

    function Remove() {
        setValue(value - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                First Card
            </div>
            <div className="card-body">
                <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={Add}>Add
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={Remove}>Remove
                </button>

                <p>{value} </p>
            </div>
        </div>
    );
};

export default Card;
