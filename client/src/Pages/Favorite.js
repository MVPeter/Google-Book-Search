import React from "react";

const Favorite = (props) => {
    return (
        <div className="container">
            <h1>Saved Favorites</h1>
            <div className="text-left mt-5">
                {props.favBook.map((element, index) => (
                    <div key={index} className="my-4 row">
                        <img
                            className="col-sm-2"
                            style={{ maxHeight: "13rem", maxWidth: "10rem" }}
                            src={element.image}
                            alt="Book cover preview"
                        />
                        <div className="col-sm-10">
                            <h5 className="card-title">{element.title}</h5>
                            <p>
                                <strong>{element.author}</strong>
                            </p>
                            <p className="card-text">{element.description}</p>
                            <a
                                href={element.link}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                More info
                            </a>
                            <button
                                className="btn btn-danger mx-3"
                                onClick={() => {
                                    props.bookDelete(element._id);
                                }}
                            >
                                Delete from List
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Favorite