import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../vendor/css/all.css';
import '../../vendor/css/icons/icomoon/styles.min.css';
import Header from '../Header';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="page-content pt-0">
                <Sidebar />

                {/* Main content */}
                <div className="content-wrapper">
                    <Outlet />
                </div>
                {/* /main content */}
            </div>
        </>
    );
};

export default Home;
