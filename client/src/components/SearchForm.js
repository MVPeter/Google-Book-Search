import React from "react";

const SearchForm = (props) => {
    return (
        <div className="container text-center">
            <div style={{ height: 300, clear: "both", paddingTop: 50, textAlign: "center" }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 className="display-4">Seach GoogleBooks for Author or Title</h2>
                    <form className="col-8 offset-2" onSubmit={props.searchGBooksAPI}>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <select
                                    name="type"
                                    className="form-control"
                                    onChange={props.updateSelect}
                                >
                                    <option value="select">Select</option>
                                    <option value="author">Author</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                            <div className="form-group col-md-7">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Text"
                                    name="search"
                                    onChange={props.updateSearch}
                                />
                            </div>
                            <div className="form-group col-md-2">
                                <button
                                type="submit"
                                className="btn btn-primary"
                                id="submitBtn"
                            >
                                Search
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;