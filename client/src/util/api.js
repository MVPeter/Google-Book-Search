import axios from "axios";

export default {
    search: (type, String) => axios.get(`/search/${type}/${String}`),

    saveBook: (obj) => axios.post("/books", obj),

    getBooks: (obj) => axios.get("/books"),

    removeBook: (id) => axios.delete("/books/"+id),
};