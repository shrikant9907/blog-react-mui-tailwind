import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const menus = [
    {
        label: 'Home',
        link: "/"
    },
    {
        label: 'About',
        link: "/about"
    },
    {
        label: 'Blog',
        link: "/blog"
    },
    {
        label: 'Contact',
        link: "/contact"
    }, 
]

const NavBar = () => {
    return (
        <>
            <Box sx={{ gap:"30px", display: { xs: 'none', md: 'flex' } }}>
                {menus.map((menu) => (
                    <Link
                        to={menu?.link}
                        key={menu.label}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {menu?.label}
                    </Link>
                ))}
            </Box>

        </>
    )
}

export default NavBar
