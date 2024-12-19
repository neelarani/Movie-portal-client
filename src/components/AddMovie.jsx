import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddMovie = () => {
  const [errMessage, setErrMessage] = useState({
    moviePoster: '',
    movieTitle: '',
    genre: '',
    duration: '',
    releaseYear: '',
    rating: '',
    summary: '',
  });

  const navigate = useNavigate();

  const validateFields = movie => {
    const {
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
    } = movie;

    let valid = true;
    let newErrors = { ...errMessage };

    const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/;
    if (!moviePoster || !urlPattern.test(moviePoster)) {
      newErrors.moviePoster = 'Please ensure the provided input is a valid url';
      valid = false;
    } else {
      newErrors.moviePoster = '';
    }
    if (
      !movieTitle ||
      typeof movieTitle !== 'string' ||
      movieTitle.length < 2
    ) {
      newErrors.movieTitle =
        'The movie title must not be empty and have at least 2 characters';
      valid = false;
    } else {
      newErrors.movieTitle = '';
    }

    if (!genre) {
      newErrors.genre = 'Genere is requird';
      valid = false;
    } else {
      newErrors.genre = '';
    }

    if (!duration || isNaN(duration) || duration < 60) {
      newErrors.duration =
        'You must check if the given input is a valid number and greater than 60';
      valid = false;
    } else {
      newErrors.duration = '';
    }
    if (!releaseYear) {
      newErrors.releaseYear = 'You must select a release year';
      valid = false;
    } else {
      newErrors.releaseYear = '';
    }
    if (!rating || isNaN(rating) || rating < 1 || rating > 10) {
      newErrors.rating = 'Rating must be between 1 and 10';
      valid = false;
    } else {
      newErrors.rating = '';
    }
    if (!summary || typeof summary !== 'string' || summary.length < 10) {
      newErrors.summary =
        'Summary must not be empty and have at least 10 characters';
      valid = false;
    } else {
      newErrors.summary = '';
    }

    setErrMessage(newErrors);
    return valid;
  };

  const handleAddMovie = e => {
    e.preventDefault();
    const form = e.target;
    const moviePoster = form.poster.value;
    const movieTitle = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.year.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    const newMovie = {
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
    };

    if (!validateFields(newMovie)) {
      return;
    }

    // send data to the server
    fetch(`https://movie-portal-server-pi.vercel.app/movies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Movie Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
        navigate('/allMovies');
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto py-10 ">
      <Helmet>
        <title>Movie Portal | Add Movie</title>
      </Helmet>

      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Movie</h1>
      </div>
      <div className="card  w-full shrink-0 shadow-2xl border-2 border-gray-600 bg-slate-50">
        <form onSubmit={handleAddMovie} className="card-body ">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="text"
                name="poster"
                placeholder="movie poster url"
                className="input input-bordered"
                required
              />
              {errMessage.moviePoster && (
                <p className="text-red-500">{errMessage.moviePoster}</p>
              )}
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="movie title"
                className="input input-bordered "
                required
              />

              {errMessage.movieTitle && (
                <p className="text-red-500">{errMessage.movieTitle}</p>
              )}
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <select
                name="genre"
                defaultValue={''}
                className="select w-full border-[1px] border-gray-300  "
              >
                <option disabled>choose your movie</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Horror</option>
                <option>Technology</option>
              </select>
              {errMessage.genre && (
                <p className="text-red-500">{errMessage.genre}</p>
              )}
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                name="duration"
                placeholder="duration"
                className="input input-bordered"
                required
              />
              {errMessage.duration && (
                <p className="text-red-500">{errMessage.duration}</p>
              )}
            </div>
          </div>

          {/* form Third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <select
                name="year"
                defaultValue={''}
                className="select w-full  border-[1px] border-gray-300"
              >
                <option disabled>choose your movie</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
              {errMessage.releaseYear && (
                <p className="text-red-500">{errMessage.releaseYear}</p>
              )}
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="rating"
                className="input input-bordered"
                required
              />
              {errMessage.rating && (
                <p className="text-red-500">{errMessage.rating}</p>
              )}
            </div>
          </div>

          {/* form Third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                rows={'10'}
                cols={'30'}
                type="text"
                name="summary"
                placeholder="write your summary"
                className="input input-bordered "
                required
              />
              {errMessage.summary && (
                <p className="text-red-500">{errMessage.summary}</p>
              )}
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="bg-purple-400 text-white border-2 px-3 py-1">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
