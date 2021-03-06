import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faFeatherAlt, faPowerOff, faShoppingBag, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Navigation = () => {
    const { user, logOut } = useAuth();

    const featherIcon = <FontAwesomeIcon icon={faFeatherAlt} />
    const userIcon = <FontAwesomeIcon icon={faUserAlt} />
    const bagIcon = <FontAwesomeIcon icon={faShoppingBag} />
    const powerIcon = <FontAwesomeIcon icon={faPowerOff} />
    const doorIcon = <FontAwesomeIcon icon={faDoorOpen} />
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#BD9200' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography style={{ textAlign: 'left' }} variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        {featherIcon}Clayware
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Home" color="inherit"><HomeIcon /></Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/shop">
                        <Button style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Shop" color="inherit">{bagIcon}</Button>
                    </Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink to="/dashboard">
                                    <Button style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Dashboard" color="inherit">{doorIcon}</Button>
                                </NavLink>
                                <Button onClick={logOut} style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Logout" color="inherit">{powerIcon}_{user.displayName}</Button>
                            </Box>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Account" color="inherit">{userIcon}</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;