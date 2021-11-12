import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Review from '../Review/Review';
import Typography from '@mui/material/Typography';

const reviews = [
    {
        name: 'Rose Perker',
        description: 'This is a very good source for buying porcelains within good price.'
    },
    {
        name: 'Adam Smith',
        description: 'Very easy to order, delivery done within the mentioned time, recommended.'
    },
    {
        name: 'Sophia Watson',
        description: 'I love their vitage vases, they are very unique, and satisfied with their customer care'
    }
]

const Reviews = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ textAlign: 'left', fontWeight: 'bold', color: '#BD9200', m: 4 }} variant="h3" component="div">
                    Reviews
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review.name}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;