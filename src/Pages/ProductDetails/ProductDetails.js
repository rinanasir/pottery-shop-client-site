import { faCartPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Navigation from '../Shared/Navigation/Navigation';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const [products, setProducts] = useState({});
    const [cart, setCart] = useState([]);

    const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(singleProduct => singleProduct._id === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
    };

    return (
        <Box>
            <Navigation />
            <Container>
                <Grid container spacing={4}>
                    <Grid item sx={{ mt: 10 }} xs={12} md={4}>
                        <img style={{ width: '100%' }} src={product.image} alt="" />
                    </Grid>
                    <Grid item sx={{ textAlign: 'left', mt: 10 }} xs={12} md={4}>
                        <Typography variant="h5">
                            {product.about}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'red', mt: 5 }} variant="h6" component="div">
                            {dollarIcon} {product.price}
                        </Typography>
                        <br />
                        <Button onClick={() => handleAddToCart(product)} sx={{ width: '50%', mt: 5 }} style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained">{cartIcon}_Add to Cart</Button>
                    </Grid>
                    <Grid item sx={{ mt: 10 }} xs={12} md={4}>
                        <Cart cart={cart}></Cart>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductDetails;