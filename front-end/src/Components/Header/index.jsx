import React from 'react';

const Header = () => {
    return (
        <div className="page-header">
            <div
                className="
          breadcrumb-line breadcrumb-line-light
          header-elements-lg-inline
          border-bottom
        "
            >
                <div className="d-flex">
                    <div className="breadcrumb">
                        <a href="index.html" className="breadcrumb-item">
                            <i className="icon-home2 mr-2" /> Home
                        </a>
                        <span className="breadcrumb-item active">Dashboard</span>
                    </div>

                    <a href="!#" className="header-elements-toggle text-body d-lg-none">
                        <i className="icon-more" />
                    </a>
                </div>

                <div className="header-elements d-none">
                    <div className="breadcrumb justify-content-center">
                        <a href="!#" className="breadcrumb-elements-item">
                            <i className="icon-comment-discussion mr-2" />
                            Support
                        </a>

                        <div className="breadcrumb-elements-item dropdown p-0">
                            <a
                                href="!#"
                                className="breadcrumb-elements-item dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                <i className="icon-gear mr-2" />
                                Settings
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="!#" className="dropdown-item">
                                    <i className="icon-user-lock" /> Account security
                                </a>
                                <a href="!#" className="dropdown-item">
                                    <i className="icon-statistics" /> Analytics
                                </a>
                                <a href="!#" className="dropdown-item">
                                    <i className="icon-accessibility" /> Accessibility
                                </a>
                                <div className="dropdown-divider" />
                                <a href="!#" className="dropdown-item">
                                    <i className="icon-gear" /> All settings
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-header-content header-elements-lg-inline">
                <div className="page-title d-flex">
                    <h4>
                        <i className="icon-arrow-left52 mr-2" />
                        <span className="font-weight-semibold">Home</span> - Dashboard
                    </h4>
                    <a href="!#" className="header-elements-toggle text-body d-lg-none">
                        <i className="icon-more" />
                    </a>
                </div>

                <div className="header-elements d-none mb-3 mb-lg-0">
                    <div className="d-flex justify-content-center">
                        <a href="!#" className="btn btn-link btn-float text-body">
                            <i className="icon-bars-alt text-indigo" />
                            <span>Statistics</span>
                        </a>
                        <a href="!#" className="btn btn-link btn-float text-body">
                            <i className="icon-calculator text-indigo" />
                            <span>Invoices</span>
                        </a>
                        <a href="!#" className="btn btn-link btn-float text-body">
                            <i className="icon-calendar5 text-indigo" />
                            <span>Schedule</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
