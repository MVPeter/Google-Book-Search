import React, { useEffect, useState } from "react";
import API from "./utils/API";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import QueryResults from "./components/QueryResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedList from "./pages/SavedList";

function App() {
    const [params, setParams] = useState({ search: "", type: "" });
    const [results, setResults] = useState([]);
    const [favBook, setFavBook] = useState([]);

    useEffect(() => {
        API.getBooks().then((books) => setFavBook(books.data));
    });

    const updateSearch = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };

    const updateType = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };

    const searchGBooksAPI = (e) => {
        e.preventDefault();
        if (params.search !== "" && params.type !== "") {
            API.search(params.type, params.search).then((response) => {
                console.log("results ", response.data.items);
                setResults(response.data.items);
            });
        }
    };

    const bookDelete = async (id) => {
        await API.removeBook(id);
    
        await API.getBooks().then((books) => setFavBook(books.data));
      };

    return (
        <div className="App">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <SearchForm
                updateSearch={updateSearch}
                updateSelect={updateSelect}
                searchGBooksAPI={searchGBooksAPI}
                />
                <QueryResults results={results} save={commitSave} />
              </Route>
              <Route exact path="/saved">
                <SavedList favBook={favBook} commitDelete={bookDelete} />
              </Route>
            </Switch>
          </Router>
        </div>
      );
    }