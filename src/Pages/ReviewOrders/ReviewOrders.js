import React, { useEffect, useState } from 'react';
import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';
import useCart from '../../hooks/useCart';
import { deleteFromDb } from '../../utilities/fakedb';
import ReviewItems from './ReviewItems';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ConfirmModal from './ConfirmModal';

const ReviewOrders = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);

    // Confirm Modal
    const [openConfirm, setOpenConfirm] = React.useState(false);
    const handleConfirmOpen = () => setOpenConfirm(true);
    const handleConfirmClose = () => setOpenConfirm(false);

    const confirmIcon = <FontAwesomeIcon icon={faCheckCircle} />

    useEffect(() => {
        fetch("https://arcane-shelf-64714.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleRemove = _id => {
        const newCart = cart.filter(tour => tour._id !== _id);
        setCart(newCart);
        deleteFromDb(_id);
    }
    // console.log(cart);

    return (
        <>
            <Navigation />
            <Container>
                <Typography sx={{ m: 3 }} style={{ fontWeight: 'bold', color: '#BD9200' }} variant="h4">Review Orders</Typography>
                <Divider></Divider>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 15 }} xs={12} md={6}>
                        {
                            cart.map(product => <ReviewItems
                                key={product._id}
                                product={product}
                                handleRemove={handleRemove}
                            ></ReviewItems>)
                        }
                    </Grid>
                    <Grid item sx={{ mt: 15 }} xs={12} md={6}>
                        <Cart cart={cart}></Cart><br />
                        <Button onClick={handleConfirmOpen} sx={{ width: '40%', mt: 5 }} style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained">{confirmIcon}_Place Order</Button>
                    </Grid>
                </Grid>
                <ConfirmModal
                    cart={cart}
                    openConfirm={openConfirm}
                    handleConfirmClose={handleConfirmClose}
                ></ConfirmModal>
            </Container>
        </>
    );
};

export default ReviewOrders;