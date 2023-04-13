import React from "react";
import Layout from "../Layout/Layout";
import PopularMovies from "../Components/Home/PopularMovies";

function Movies() {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <PopularMovies />
      </div>
    </Layout>
  );
}

export default Movies;
