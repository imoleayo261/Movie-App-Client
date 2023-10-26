import React from "react";
import MovieCard from "../../conponents/movieCard/MovieCard";
import { useFetch } from "../../hooks/useFetch";
import useAuth from "../../hooks/useAuth";
import { useCustomParams } from "../../hooks/useCustomParsms";

const Bookmark = () => {
  const { token } = useAuth();
  const { data, error, loading, updateUI } = useFetch("/api/bookmark", token);
  const { userInput, filteredMovies } = useCustomParams(data);

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

export default Bookmark;
