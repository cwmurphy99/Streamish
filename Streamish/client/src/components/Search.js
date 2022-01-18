import React, { useEffect, useState } from "react";
import Video from "./Video";
import { searchVideos } from "../modules/videoManager";

const SearchBar = () => {
    const [searchTerms, setSearchTerms] = useState("");
    const [filteredSearch, setFilteredSearch] = useState([]);

    const handleSearchInput = (event) => {
        event.preventDefault();
        setSearchTerms(event.target.value);
    };

    const handleClickSearch = (event) => {
        event.preventDefault();
        searchVideos(searchTerms)
            .then(res => {
                setFilteredSearch(res)
            })
    };

    return (
        <div className="container">
            <input
                className="send_input"
                type="text"
                id="inputSearch"
                value={searchTerms}
                onChange={handleSearchInput}
            />
            <button onClick={handleClickSearch}>Search</button>

            <>{filteredSearch.map(s => {
                s.comment = []
                return <Video key={s.id} video={s} />
            })}
            </>
        </div>)
}

export default SearchBar;