import React from "react";
import { MdSearch } from "react-icons/md";

import "./styles.css";

const SearchBar = ({
  handleSubmit,
  handleChange,
  handleFocus,
  handleBlur,
  placeholder
}) => (
  <form
    className="searchbar-form"
    onSubmit={handleSubmit}
    onFocus={handleFocus}
    onBlur={handleBlur}
  >
    <input
      className="searchbar-input"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
    <button className="searchbar-button">
      <MdSearch />
    </button>
  </form>
);
export default SearchBar;
