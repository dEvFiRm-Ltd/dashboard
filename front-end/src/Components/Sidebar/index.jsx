import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg align-self-start">
            {/* Sidebar content */}
            <div className="sidebar-content">
                {/* Header */}
                <div className="sidebar-section sidebar-header">
                    <div className="sidebar-section-body d-flex align-items-center justify-content-center pb-0">
                        <h6 className="sidebar-resize-hide flex-1 mb-0">Navigation</h6>
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-light text-body border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex"
                            >
                                <i className="icon-transmission" />
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-light text-body border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none"
                            >
                                <i className="icon-cross2" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* /header */}

                {/* User menu */}
                <div className="sidebar-section sidebar-user">
                    <div className="sidebar-section-body d-flex justify-content-center">
                        <a href="!#">
                            <img
                                src="../../../../global_assets/images/demo/users/face11.jpg"
                                className="rounded-circle"
                                alt=""
                            />
                        </a>

                        <div className="sidebar-resize-hide flex-1 ml-3">
                            <div className="font-weight-semibold">Victoria Baker</div>
                            <div className="font-size-sm line-height-sm text-muted">
                                Senior developer
                            </div>
                        </div>
                    </div>
                </div>
                {/* /user menu */}

                {/* Main navigation */}
                <div className="sidebar-section">
                    <ul className="nav nav-sidebar" data-nav-type="accordion">
                        {/* Main */}
                        <li className="nav-item-header pt-0">
                            <div className="text-uppercase font-size-xs line-height-xs">Main</div>{' '}
                            <i className="icon-menu" title="Main" />
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                <i className="icon-home4" />
                                <span>
                                    Dashboard
                                    <span className="d-block font-weight-normal opacity-50">
                                        No active orders
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="form" className="nav-link">
                                <i className="icon-home4" />
                                <span>Form</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="list" className="nav-link">
                                <i className="icon-home4" />
                                <span>List</span>
                            </Link>
                        </li>
                        {/* /main */}
                    </ul>
                </div>
                {/* /main navigation */}
            </div>
            {/* /sidebar content */}
        </div>
    );
};

export default Sidebar;
