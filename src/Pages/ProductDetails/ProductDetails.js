import { faCartPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <Box>
            <Navigation />
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 5 }} xs={12} md={6}>
                        <img style={{ width: '80%' }} src={product.image} alt="" />
                    </Grid>
                    <Grid item sx={{ textAlign: 'left', mt: 5 }} xs={12} md={6}>
                        <Typography variant="h5">
                            {product.about}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'red' }} variant="h6" component="div">
                            {dollarIcon} {product.price}
                        </Typography>
                        <Rating name="read-only" value={product.value} readOnly />
                        <br />
                        <Button sx={{ width: '40%', mt: 5 }} style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained">{cartIcon}_Add to Cart</Button>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default ProductDetails;