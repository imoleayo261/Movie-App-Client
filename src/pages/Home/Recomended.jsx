import React from "react";
import MovieCard from "../../conponents/movieCard/MovieCard";

const Recomended = ({ data, error, loading, updateUI }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="grid gap-3">
      {data.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Recomended;
