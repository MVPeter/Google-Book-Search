import React, { useEffect, useState } from "react";
import API from "./utils/API";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorite from "./pages/Favorite";

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

    const updateSelect = (e) => {
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

    const bookSave = async (obj) => {
        await API.saveBook(obj);
    
        await API.getBooks().then((books) => setFavBook(books.data));
    
         console.log(bookList);
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
                <Results results={results} bookSave={bookSave} />
              </Route>
              <Route exact path="/favorite">
                <Favorite favBook={favBook} commitDelete={bookDelete} />
              </Route>
            </Switch>
          </Router>
        </div>
      );
    }

export default App;