import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import Movies from "../../src/Data/movies.json";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "../Components/Single/MovieCasts";

function SingleMovie() {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.Title === id);
  return (
    <Layout>
      <MovieInfo movie={movie} />
    </Layout>
  );
}

export default SingleMovie;
