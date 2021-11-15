import React from 'react';
import { Button, Divider, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
    const { cart } = props;

    const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />

    let totalQuantity = 0;
    let total = 0;
    const deliveryFee = 20;

    for (const item of cart) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        total = total + item.price * item.quantity;
        totalQuantity = totalQuantity + item.quantity;
    };
    const totalFixed = total.toFixed(2);
    const withDelivery = total + deliveryFee;
    const fullPriceFixed = withDelivery.toFixed(2);

    return (
        <>
            <Typography style={{ fontWeight: 'bold', color: '#BD9200' }} variant="h4">Cart</Typography>
            <Divider></Divider>
            <Typography style={{ fontWeight: 'bold', color: '#BD9200' }} variant="subtitle1">Total Items: {totalQuantity}</Typography>
            <Typography style={{ fontWeight: 'bold', color: 'black' }} variant="subtitle1">Price: {dollarIcon} {totalFixed}</Typography>
            <Typography style={{ fontWeight: 'bold', color: 'black' }} variant="subtitle1">Shippment Fee: {dollarIcon} {deliveryFee}</Typography>
            <Typography style={{ fontWeight: 'bold', color: 'black' }} variant="subtitle1">Total Price: {dollarIcon} {fullPriceFixed}</Typography>
            <NavLink style={{ textDecoration: 'none' }} to="/reviewOrders">
                <Button sx={{ width: '50%', mt: 5 }} style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained">Review Order</Button>
            </NavLink>
        </>
    );
};

export default Cart;