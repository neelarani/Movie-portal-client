import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import AddMovie from '../components/AddMovie';
import PrivetRoute from './PrivetRoute';
import AllMovies from '../components/AllMovies';
import MovieDetails from '../components/MovieDetails';
import AllMovieDetails from '../components/AllMovieDetails';
import AboutUs from '../components/AboutUs';
import UpdateMovie from '../components/UpdateMovie';
import ErrPage from '../components/ErrPage';
import MyFavorite from '../components/MyFavorite';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allMovies',
        element: <AllMovies></AllMovies>,

        loader: () => fetch(`https://movie-portal-server-pi.vercel.app/movies`),
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/addMovie',
        element: (
          <PrivetRoute>
            <AddMovie></AddMovie>
          </PrivetRoute>
        ),
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/movieDetails/:id',
        element: (
          <PrivetRoute>
            <MovieDetails></MovieDetails>
          </PrivetRoute>
        ),

        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-pi.vercel.app/movies/${params.id}`
          ),
      },

      {
        path: '/allMovieDetails/:id',
        element: (
          <PrivetRoute>
            <AllMovieDetails></AllMovieDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-pi.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: '/updateMovie/:id',
        element: (
          <PrivetRoute>
            <UpdateMovie></UpdateMovie>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-pi.vercel.app/movies/${params.id}`
          ),
      },

      {
        path: '/myFavorite',
        element: (
          <PrivetRoute>
            <MyFavorite></MyFavorite>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
