import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useLocation, useSearchParams } from "react-router-dom";

const Seach = () => {
  const [searchParams, setSeachParams] = useSearchParams();
  const [userInput, setUserInput] = useState();

  const [placeholder, setPlaceholder] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setUserInput(searchParams.get("search"));
  }, [searchParams]);

  useEffect(() => {
    if (location.pathname === "/") {
      setPlaceholder("Search for movies or TV series");
    } else if (location.pathname === "/movies") {
      setPlaceholder("Search for movies");
    } else if (location.pathname === "/tvseries") {
      setPlaceholder("Search for Tv series");
    } else if (location.pathname === "/bookmark") {
      setPlaceholder("Search for bookmarked shows");
    }
  }, [location]);

  return (
    <div className="search position-relative my-3 mx-4">
      <BiSearch className=" position-absolute top-0 bottom-0 my-auto text-white fs-1" />
      <input
        onChange={(e) => {
          setSeachParams({ search: e.target.value });
        }}
        value={userInput ? userInput : ""}
        type="text"
        className="w-100 py-2 rounded-2 custom-bg-dark-grey border-0 ps-5 fw-semibold fs-5"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Seach;
