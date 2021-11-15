import { Button } from '@mui/material';
import React from 'react';

const ReviewItems = (props) => {
    const { name, price, quantity, _id } = props.product;
    const { handleRemove } = props;

    return (
        <div>
            <h4>Tour: {name}</h4>
            <p>Price: {price}</p>
            <p>Booked for: {quantity}</p>
            <Button onClick={() => handleRemove(_id)} sx={{ width: '40%', mt: 5 }} style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained">Remove Product</Button>
        </div>
    );
};

export default ReviewItems;