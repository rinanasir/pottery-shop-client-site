import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import banner from '../../../images/banner-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

const bannerBg = {
    background: `url(${banner})`
};

const BannerHome = () => {
    const featherIcon = <FontAwesomeIcon icon={faFeatherAlt} />
    return (
        <Box style={bannerBg}>
            <Typography style={{ lineHeight: '500px', color: '#BD9200', fontWeight: 'bold' }} variant="h1">
                {featherIcon}Clayware
            </Typography>
            <Typography variant="h6" sx={{ backgroundColor: '#BD9200', fontSize: 20, fontWeight: 'bolder' }}>
                Dicover your new favourite earthenware and vintage porcelains with {featherIcon} Clayware pottery shop
            </Typography>
        </Box>
    );
};

export default BannerHome;