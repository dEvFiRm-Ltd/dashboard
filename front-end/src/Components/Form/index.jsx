import React from 'react';

const Forms = () => {
    return (
        <form action="post">
            <fieldset className="mb-3">
                <legend className="text-uppercase font-size-sm font-weight-bold">
                    Basic inputs
                </legend>

                <div className="form-group row">
                    <label className="col-form-label col-lg-2" id="passwords">
                        Password
                    </label>
                    <div className="col-lg-10">
                        <input type="password" className="form-control" htmlFor="passwords" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-form-label col-lg-2" id="input">
                        Input with placeholder
                    </label>
                    <div className="col-lg-10">
                        <input
                            type="text"
                            className="form-control"
                            htmlFor="input"
                            placeholder="Enter your username..."
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-lg-2">Textarea</label>
                    <div className="col-lg-10">
                        <textarea
                            rows="3"
                            cols="3"
                            className="form-control"
                            placeholder="Default textarea"
                        />
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default Forms;
