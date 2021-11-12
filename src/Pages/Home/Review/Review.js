import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Review = (props) => {
    const { name, description } = props.review;

    return (
        <Grid item xs={4} sm={4} md={4} sx={{ mb: 4 }}>
            <Card sx={{ minWidth: 275, backgroundColor: '#F5F0B5' }}>
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" color="text.secondary">
                        "{description}"
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;