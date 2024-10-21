import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Container } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Header />
            <Container maxWidth="md">
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}

export default Layout
