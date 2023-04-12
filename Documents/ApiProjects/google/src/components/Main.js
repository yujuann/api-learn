import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

  const searchBook = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q= " +
          search +
          `&key=${API_KEY}` +
          "&maxResults=40"
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err.response.data));
    console.log(API_KEY);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      searchBook();
    }
  };

  const handleButtonClick = () => {
    searchBook();
  };
  return (
    <>
      <div className="Header">
        <div className="row1">
          <h1>
            Here Il faut lire des livres pour vivre. <br />
            Aladdin Livres d'occasion
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Books</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleSearch}
            />
            <button onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <img src="./images/like.jpeg" alt="브람스" />
        </div>
      </div>
      <div className="Container">{<Card book={bookData} />}</div>
    </>
  );
}
// dd;
