import React from "react";

const SearchForm = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <form aria-label="form" onSubmit={HandleSubmit}>
        <label for="username">GitHub Username: </label>
        <input name="username" type="text" />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchForm;
