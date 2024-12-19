import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const AllMovies = () => {
  const allMoviesLoaded = useLoaderData();
  const [search, setSearch] = useState('');

  const filteredMovies = allMoviesLoaded.filter(movi =>
    movi.movieTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" my-24">
      <Helmet>
        <title>Movie Portal | All Movies</title>
      </Helmet>

      <h2 className="text-center text-3xl font-semibold mb-5">
        Search Your Favorite Movie
      </h2>
      <label className="input input-bordered flex items-center gap-2 mx-auto md:w-[400px]">
        <input
          type="text"
          className="grow"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5 mt-10">
        {filteredMovies.map(movi => (
          <div
            key={movi._id}
            className="card card-compact bg-base-100 bg-transparent border-2 border-gray-600  shadow-xl"
          >
            <figure>
              <img className="w-full h-64" src={movi.moviePoster} />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold ">
                Title: <span className="font-semibold"> {movi.movieTitle}</span>
              </h3>

              <p className="text-sm font-bold  ">
                Genre: <span className="font-semibold"> {movi.genre}</span>
              </p>
              <p className="text-sm font-bold  ">
                Duration:
                <span className="font-semibold"> {movi.duration} min</span>
              </p>
              <p className="text-sm font-bold ">
                Release Year:
                <span className="font-semibold"> {movi.releaseYear}</span>
              </p>

              <div className="flex">
                <div>
                  <p className="font-bold text-sm mr-1">
                    Rating:
                    <span className="font-semibold"> {movi.rating}</span>
                  </p>
                </div>
                <div className="rating w-4">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="card-actions ">
                <Link
                  to={`/allMovieDetails/${movi._id}`}
                  className="px-3 py-1 bg-purple-400 text-white font-semibold"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
