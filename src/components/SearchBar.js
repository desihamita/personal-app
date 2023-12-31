import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange}) {
    return (
        <div className="search-bar">
            <input
                className="search-bar"
                type="text"
                placeholder="Cari berdasarkan nama"
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
        
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.string.isRequired,
}

export default SearchBar;