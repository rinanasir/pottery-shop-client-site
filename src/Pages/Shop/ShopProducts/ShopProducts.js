import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ShopProduct from '../ShopProduct/ShopProduct';

const ShopProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold', color: '#BD9200', m: 4 }} variant="h3" component="div">
                    Handmade Pottery Collection
                </Typography>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <ShopProduct
                            key={product.name}
                            product={product}
                        ></ShopProduct>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ShopProducts;