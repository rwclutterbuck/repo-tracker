import React from "react";

const SearchForm = ({ getResult }) => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.username.value;
    getResult(searchText);
    e.target.reset();
  };

  return (
    <>
      <form aria-label="form" onSubmit={HandleSubmit}>
        <label htmlFor="username">GitHub Username: </label>
        <input name="username" type="text" />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchForm;
