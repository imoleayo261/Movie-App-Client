import React from "react";
import MovieCarousel from "./MovieCarousel";
import Loading from "../../utilis/Loading"

const Trending = ({ data, error, loading, updateUI }) => {

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <MovieCarousel data={data} updateUI={updateUI} />
    </div>
  );
};

export default Trending;
