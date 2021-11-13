import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import image from '../../../images/subscribe-1.png';

const Subscribe = () => {
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ mt: 5, pb: 4 }}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400 }}
                        src={image} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h3" sx={{ mb: 5, pr: 10 }} style={{ color: '#BD9200' }}>
                            Subscribe to get our Secret Deal !!!
                        </Typography>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            variant="standard" /> <br />
                        <Button style={{ backgroundColor: '#BD9200', color: 'white' }} sx={{ mt: 4 }} variant="contained">{checkIcon}_Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Subscribe;