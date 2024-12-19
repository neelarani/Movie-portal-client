import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturesMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://movie-portal-server-pi.vercel.app/movies-item`)
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      });
  }, []);

  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-center text-3xl font-semibold">Featured Movies</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
        {movies.map(movie => (
          <div
            key={movie._id}
            className="card card-compact bg-base-100 bg-transparent  shadow-xl p-2 border-2 border-gray-500"
          >
            <figure>
              <img
                className="w-full h-60"
                src={movie.moviePoster}
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <h3 className="text-xl font-bold ">
                Title:{' '}
                <span className="font-semibold"> {movie.movieTitle}</span>
              </h3>

              <p className="text-sm font-bold  ">
                Genre: <span className="font-semibold"> {movie.genre}</span>
              </p>
              <p className="text-sm font-bold  ">
                Duration:
                <span className="font-semibold"> {movie.duration} min</span>
              </p>
              <p className="text-sm font-bold ">
                Release Year:
                <span className="font-semibold"> {movie.releaseYear}</span>
              </p>

              <div className="flex">
                <div>
                  <p className="font-bold text-sm mr-1">
                    Rating:
                    <span className="font-semibold"> {movie.rating}</span>
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
                  to={`/movieDetails/${movie._id}`}
                  className="bg-purple-400 text-white px-3 py-1 font-semibold text-sm"
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

export default FeaturesMovie;
