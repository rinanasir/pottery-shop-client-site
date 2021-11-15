import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Review = () => {
    const [review, setReview] = useState('');

    const handleOnBlur = e => {
        setReview(e.target.value);
    }

    const handleReviewSubmit = e => {
        alert('Review Added Successfully');

        e.preventDefault();
    }
    return (
        <Box>
            <Container>
                <Typography sx={{ mt: 4, fontWeight: 'bold' }} variant="h4">Give Your Review About Our Shop</Typography>
                <form onSubmit={handleReviewSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 2 }}
                        id="standard-basic"
                        label="Write Review"
                        name="review"
                        type="text"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button
                        type="submit"
                        sx={{ width: '45%', m: 1 }}
                        style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained"
                    >Add Review</Button>
                </form>
                {/* {success && <Alert severity="success">Made Admin Successfully</Alert>} */}
            </Container>
        </Box>
    );
};

export default Review;