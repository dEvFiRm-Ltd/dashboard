import React from 'react';

const Dashboard = () => {
    return (
        <div className="content">
            {/* Main charts */}
            <div className="row">
                <div className="col-xl-7">
                    {/* Traffic sources */}
                    <div className="card">
                        <div className="card-header header-elements-inline">
                            <h6 className="card-title">Traffic sources</h6>
                            <div className="header-elements">
                                <label
                                    className="custom-control custom-switch custom-control-right"
                                    htmlFor="checks"
                                >
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="checks"
                                        checked
                                    />
                                    <span className="custom-control-label">Live update</span>
                                </label>
                            </div>
                        </div>

                        <div className="card-body py-0">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div
                                        className="
                          d-flex
                          align-items-center
                          justify-content-center
                          mb-2
                        "
                                    >
                                        <a
                                            href="!#"
                                            className="
                            btn
                            bg-transparent
                            border-teal
                            text-teal
                            rounded-pill
                            border-2
                            btn-icon
                            mr-3
                          "
                                        >
                                            <i className="icon-plus3" />
                                        </a>
                                        <div>
                                            <div className="font-weight-semibold">New visitors</div>
                                            <span className="text-muted">2,349 avg</span>
                                        </div>
                                    </div>
                                    <div className="w-75 mx-auto mb-3" id="new-visitors" />
                                </div>

                                <div className="col-sm-4">
                                    <div
                                        className="
                          d-flex
                          align-items-center
                          justify-content-center
                          mb-2
                        "
                                    >
                                        <a
                                            href="!#"
                                            className="
                            btn
                            bg-transparent
                            border-warning
                            text-warning
                            rounded-pill
                            border-2
                            btn-icon
                            mr-3
                          "
                                        >
                                            <i className="icon-watch2" />
                                        </a>
                                        <div>
                                            <div className="font-weight-semibold">New sessions</div>
                                            <span className="text-muted">08:20 avg</span>
                                        </div>
                                    </div>
                                    <div className="w-75 mx-auto mb-3" id="new-sessions" />
                                </div>

                                <div className="col-sm-4">
                                    <div
                                        className="
                          d-flex
                          align-items-center
                          justify-content-center
                          mb-2
                        "
                                    >
                                        <a
                                            href="!#"
                                            className="
                            btn
                            bg-transparent
                            border-indigo
                            text-indigo
                            rounded-pill
                            border-2
                            btn-icon
                            mr-3
                          "
                                        >
                                            <i className="icon-people" />
                                        </a>
                                        <div>
                                            <div className="font-weight-semibold">Total online</div>
                                            <span className="text-muted">
                                                <span className="badge badge-mark border-success mr-2" />
                                                5,378 avg
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-75 mx-auto mb-3" id="total-online" />
                                </div>
                            </div>
                        </div>

                        <div className="chart position-relative" id="traffic-sources" />
                    </div>
                    {/* /traffic sources */}
                </div>

                <div className="col-xl-5">
                    {/* Sales stats */}
                    <div className="card">
                        <div className="card-header header-elements-sm-inline py-sm-0">
                            <h6 className="card-title py-sm-3">Sales statistics</h6>
                            <div className="header-elements">
                                <select className="form-control custom-select" id="select_date">
                                    <option value="val1">June, 29 - July, 5</option>
                                    <option value="val2">June, 22 - June 28</option>
                                    <option value="val3" selected>
                                        June, 15 - June, 21
                                    </option>
                                    <option value="val4">June, 8 - June, 14</option>
                                </select>
                            </div>
                        </div>

                        <div className="card-body py-0">
                            <div className="row text-center">
                                <div className="col-4">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">5,689</h5>
                                        <span className="text-muted font-size-sm">new orders</span>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">32,568</h5>
                                        <span className="text-muted font-size-sm">this month</span>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="mb-3">
                                        <h5 className="font-weight-semibold mb-0">$23,464</h5>
                                        <span className="text-muted font-size-sm">
                                            expected profit
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="chart mb-2" id="app_sales" />
                        <div className="chart" id="monthly-sales-stats" />
                    </div>
                    {/* /sales stats */}
                </div>
            </div>
            {/* /main charts */}
        </div>
    );
};

export default Dashboard;
