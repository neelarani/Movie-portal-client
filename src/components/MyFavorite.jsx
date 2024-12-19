import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const MyFavorite = () => {
  const { user } = useContext(AuthContext);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://movie-portal-server-pi.vercel.app/favoriteMovie/${user.email}`
    )
      .then(res => res.json())
      .then(data => setFavoriteMovies(data));
  }, [favoriteMovies]);

  const deleteFavoriteMovie = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://movie-portal-server-pi.vercel.app/favoriteMovie/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Movie has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return (
    <div className="my-16 min-h-screen overflow-hidden">
      <Helmet>
        <title>Movie Portal | My Favorite</title>
      </Helmet>
      <h2 className="text-center text-3xl font-semibold">
        My Favorites Movie List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
        {favoriteMovies.map(movie => (
          <div
            key={movie._id}
            className="card card-compact bg-base-100 bg-transparent border-2 border-gray-600  shadow-xl "
          >
            <figure>
              <img className="w-full h-[400px]" src={movie.moviePoster} />
            </figure>
            <div className="card-body">
              <p className="text-base font-medium  ">
                Title: {movie.movieTitle}
              </p>
              <p className="text-base font-medium  ">Genre: {movie.genre}</p>
              <p className="text-base font-medium  ">
                Duration: {movie.duration} min
              </p>
              <p className="text-base font-medium  ">
                Release Year: {movie.releaseYear}
              </p>

              <div className="flex">
                <div>
                  <p className="font-bold text-base mr-1">
                    Rating:
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
                <button
                  onClick={() => deleteFavoriteMovie(movie._id)}
                  className="bg-purple-400 text-white px-3 py-1"
                >
                  Delete favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorite;
