import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Faq from './Faq';
import FeaturesMovie from './FeaturesMovie';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MovieCategory from './MovieCategory';

const Home = () => {
  const { toggleTheme, theme } = useContext(AuthContext);
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 text-white bg-purple-400 my-6"
      >
        {theme === 'dark' ? 'Light Mood' : 'Dark Mood'}
      </button>
      <Helmet>
        <title>Movie Portal | Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturesMovie></FeaturesMovie>
      <MovieCategory></MovieCategory>
      <Faq></Faq>
    </div>
  );
};

export default Home;
