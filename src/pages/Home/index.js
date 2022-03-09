import React from "react";
import { SearchForm, Result } from "../../components/";
import { getResult } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const search = (searchTerm) => dispatch(getResult(searchTerm));

  const renderResult = () => {
    <Result result={result} />;
  };

  return (
    <>
      <div>
        <h1>HELLO AND WELCOME TO OUR BRILLIANT GITHUB CLONE</h1>
        <h2>Probably some more information I guess </h2>
      </div>
      <div>
        <SearchForm getResult={search} />
      </div>
      <div>{renderResult()}</div>
    </>
  );
};
export default Home;
