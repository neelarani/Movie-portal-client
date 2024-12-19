import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMovie = () => {
  const loadedData = useLoaderData();

  const {
    _id,
    moviePoster,
    movieTitle,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
  } = loadedData;

  const handleUpdateMovie = e => {
    e.preventDefault();
    const form = e.target;
    const moviePoster = form.poster.value;
    const movieTitle = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.year.value;
    const rating = form.rating.value;
    const summary = form.summary.value;

    const updateMovie = {
      _id,
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
    };

    fetch(`https://movie-portal-server-pi.vercel.app/movies/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateMovie),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Movie Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update a Movie</h1>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateMovie} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="text"
                name="poster"
                defaultValue={moviePoster}
                placeholder="movie poster url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={movieTitle}
                placeholder="movie title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <select
                name="genre"
                defaultValue={genre}
                className="select w-full max-w-xs border-[1px] border-gray-300"
              >
                <option disabled>choose your movie</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Horror</option>
                <option>Technology</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                name="duration"
                defaultValue={duration}
                placeholder="duration"
                className="input input-bordered"
                required
              />
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
                defaultValue={releaseYear}
                className="select w-full max-w-xs border-[1px] border-gray-300"
              >
                <option disabled>choose your movie</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="rating"
                className="input input-bordered"
                required
              />
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
                defaultValue={summary}
                placeholder="write your summary"
                className="input input-bordered "
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="border-sky-400 border-2 px-3 py-1">
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
