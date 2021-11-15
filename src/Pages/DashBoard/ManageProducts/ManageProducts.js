import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-shelf-64714.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = id => {
        const url = `https://arcane-shelf-64714.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    alert('Product Successfully Deleted');
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            });
    };

    return (
        <Box>
            <Typography sx={{ color: '#BD9200', fontWeight: 'bold' }} variant="h4" color="text.secondary">
                Manage Products
            </Typography>
            {
                products.map(product =>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 20 }} variant="subtitle1" color="text.secondary">
                                {product.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button onClick={() => handleDelete(product._id)}>Delete</Button>
                        </Grid>
                    </Grid>
                )
            }
        </Box>
    );
};

export default ManageProducts;