import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCategory = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showMovies, setShowMovies] = useState(false);

  useEffect(() => {
    fetch(`https://movie-portal-server-pi.vercel.app/movies`)
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      });
  }, []);

  const filteredMovie = selectedCategory
    ? movies.filter(
        movie => movie.genre.toLowerCase() === selectedCategory.toLowerCase()
      )
    : [];

  return (
    <div className="container mx-auto p-8 space-y-4  bg-base-100 ">
      <h2 className="text-3xl font-bold text-center">Choose Category</h2>
      <p className="text-base text-center font-medium text-gray-600 ">
        Explore our movie portal to find your favorite films categorized by
        genre. <br /> Select a category to discover exciting movies!
      </p>
      <div className="justify-center flex flex-col md:flex-row gap-7 ">
        <button
          onClick={() => {
            setSelectedCategory('Horror');
            setShowMovies(true);
          }}
          className={`px-4 py-1 font-semibold text-xl ${
            selectedCategory === 'Horror'
              ? 'bg-purple-400 text-white'
              : 'border-2 border-purple-400'
          }`}
        >
          Horror
        </button>
        <button
          onClick={() => {
            setSelectedCategory('Technology');
            setShowMovies(true);
          }}
          className={`px-4 py-1 font-semibold text-xl ${
            selectedCategory === 'Technology'
              ? 'bg-purple-400 text-white'
              : 'border-2 border-purple-400'
          }`}
        >
          Technology
        </button>
        <button
          onClick={() => {
            setSelectedCategory('Drama');
            setShowMovies(true);
          }}
          className={`px-4 py-1 font-semibold text-xl ${
            selectedCategory === 'Drama'
              ? 'bg-purple-400 text-white'
              : 'border-2 border-purple-400'
          }`}
        >
          Drama
        </button>
        <button
          onClick={() => {
            setSelectedCategory('Comedy');
            setShowMovies(true);
          }}
          className={`px-4 py-1 font-semibold text-xl ${
            selectedCategory === 'Comedy'
              ? 'bg-purple-400 text-white'
              : 'border-2 border-purple-400'
          }`}
        >
          Comedy
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 ">
        {filteredMovie.map(movie => (
          <div
            key={movie._id}
            className="card card-compact  w-full  shadow-xl  mt-16"
          >
            <figure>
              <img className="w-full h-80" src={movie.moviePoster} />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold mt-2">
                Title: {movie.movieTitle}
              </h3>
              <p className="font-semibold text-base">Genre: {movie.genre}</p>

              <p className="font-bold text-base">
                Duration:{' '}
                <span className="font-semibold">{movie.duration}</span>
              </p>
              <p className="font-bold text-base">
                Release Year:{' '}
                <span className="font-semibold">{movie.releaseYear}</span>
              </p>
              <div className="flex ">
                <div>
                  <p className="font-bold text-base mr-1">
                    Rating:{' '}
                    <span className="font-semibold">{movie.rating}</span>
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
                  className="bg-purple-400 text-white text-sm px-3 py-1"
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

export default MovieCategory;
