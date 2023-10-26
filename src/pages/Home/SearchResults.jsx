import React from "react";
import MovieCard from "../../conponents/movieCard/MovieCard";

const SearchResults = ({ userInput, filteredMovies }) => {
  return (
    <div className="px-4 text-start">
      <h2 className="pb-3">
        Found {filteredMovies.length} results for {userInput}
      </h2>
      <div className="grid gap-3">
      {filteredMovies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
      </div>
    </div>
  );
};

export default SearchResults;
