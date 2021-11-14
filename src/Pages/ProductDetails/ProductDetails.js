import { faCartPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
                        <Button sx={{ width: '50%', mt: 5 }} style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained">{cartIcon}_Add to Cart</Button>
                    </Grid>
                    <Grid item sx={{ mt: 10 }} xs={12} md={4}>
                        <Typography style={{ fontWeight: 'bold', color: '#BD9200' }} variant="h4">Cart</Typography>
                        <Divider></Divider>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductDetails;