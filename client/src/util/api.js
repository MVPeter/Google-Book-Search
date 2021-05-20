import axios from "axios";

export default {
    search: (type, String, obj) => axios.get(`/api/gbooks/${type}/${String}`, obj),
    // search: (type, string) => axios.get("/search/", {params: {q: type + ":" + string }}),

    saveBook: (obj) => axios.post("/api/books", obj),

    getBooks: (obj) => axios.get("/api/books"),

    removeBook: (id) => axios.delete("/api/books/"+id),
};