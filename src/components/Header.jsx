import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import * as React from 'react';
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import Container from '@mui/material/Container'; 
import { Stack } from '@mui/material';

const Header = () => {
 

    return (
        <>
            <AppBar position="static" color="transparent">
                <Container maxWidth="xl">
                    <Toolbar sx={{width: '100%'}} disableGutters>
                        <Stack sx={{width: '100%'}} justifyContent={'space-between'} alignItems={'center' } direction={'row'}>
                            <Link to="/">Shrimo Blog</Link>
                            <NavBar />
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )
}

export default Header
