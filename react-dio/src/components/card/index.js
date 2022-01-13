import { useState } from 'react';
import Button from '../button';

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
                <Button
                    className="btn btn-outline-success"
                    onClick = {Add}
                    text="Add">
                </Button>

                <Button
                    className="btn btn-outline-danger"
                    onClick = {Remove}
                    text="Remove">
                </Button>

                <p>{value} </p>
            </div>
        </div>
    );
};

export default Card;
