import { useContext } from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MovieDetails = () => {
  const loadedData = useLoaderData() || [];
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const {
    _id,
    movieTitle: title,
    moviePoster: image,
    genre,
    duration,
    releaseYear: year,
    rating,
    summary,
  } = loadedData;

  const handleDelete = _id => {
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
        fetch(`https://movie-portal-server-pi.vercel.app/movies/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Movie has been deleted.',
                icon: 'success',
              });
              navigate('/allMovies');
            }
          });
      }
    });
  };

  const handleFavorite = () => {
    const favoriteMovie = {
      userEmail: user?.email,
      movieTitle: title,
      moviePoster: image,
      genre: genre,
      duration: duration,
      releaseYear: year,
      rating: rating,
      summary: summary,
    };

    fetch(`https://movie-portal-server-pi.vercel.app/favoriteMovie`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Added to Favorites',
            text: 'Movie has been Added to your favorites list.',
            icon: 'success',
          });
        }
      });
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2  
      container mx-auto my-24 gap-10"
    >
      <div>
        <img className="w-full h-[500px]" src={image} alt="" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold mt-2">Title: {title}</h3>
        <p className="font-semibold text-base">Genre: {genre}</p>

        <p className="font-bold text-base">
          Duration: <span className="font-semibold">{duration}</span>
        </p>
        <p className="font-bold text-base">
          Release Year: <span className="font-semibold">{year}</span>
        </p>

        <div className="flex ">
          <p className="font-bold text-base mr-1">
            Rating: <span className="font-semibold">{rating}</span>
          </p>

          <div className="rating w-4">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <p className="font-bold text-sm">
          Summary: <span className="font-semibold">{summary}</span>
        </p>
        <div className="flex flex-col md:flex-row gap-5 text-center">
          <button
            onClick={() => handleDelete(_id)}
            className="px-3 py-1 bg-purple-400 text-white font-semibold text-xs"
          >
            Delete Movie
          </button>
          <button
            onClick={handleFavorite}
            className="px-3 py-1 border-2  border-purple-400 font-semibold text-xs"
          >
            Add to Favorite
          </button>
          <Link
            to={`/updateMovie/${_id}`}
            className="px-3 py-1 border-2 border-purple-400 font-semibold text-xs"
          >
            Update Movie
          </Link>
          <Link
            to={'/allMovies'}
            className="border-2  border-purple-400 px-3 py-1 font-semibold text-xs"
          >
            See all movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
