import React, { useState } from "react";
import { useFetch } from "../../hooks/UseFetch";
import MovieCard from "../../conponents/movieCard/MovieCard";
import { useCustomParams } from "../../hooks/useCustomParsms";
import SearchResults from "../Home/SearchResults";
import Loading from "../../utilis/Loading";

const Movies = () => {
  
  const { data, error, loading, updateUI } = useFetch("/api/movie/movie");
  const { userInput, filteredMovies } = useCustomParams(data)
  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (userInput) {
    return (
      <SearchResults userInput={userInput} filteredMovies={filteredMovies} />
    );
  }


  return (
    <div className="grid gap-3 mx-4 text-start">
      {data.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Movies;
