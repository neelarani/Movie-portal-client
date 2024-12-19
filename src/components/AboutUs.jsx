import { Helmet } from 'react-helmet-async';
import img from '../assets/about-us.avif';
import team1 from '../assets/my portfolio pic.png';
import team2 from '../assets/ababil.jpg';
import team3 from '../assets/hayat.jpg';

const AboutUs = () => {
  return (
    <div className="my-24 container mx-auto ">
      <Helmet>
        <title>Movie Portal | About us</title>
      </Helmet>
      <h2 className="font-bold text-3xl text-center">
        Discover the Story Behind Our Movie Portal
      </h2>

      <div className="flex flex-col md:flex-row gap-14 mt-12">
        <div className="w-3/6 text-justify space-y-4 text-base">
          <p className="text-lg text-gray-700 ">
            Welcome to our Movie Portal! We are dedicated to bringing you the
            best of movies, from the latest blockbusters to timeless classics.
            Our platform is built with passion and a love for cinema, and our
            goal is to create a space where movie lovers can discover, discuss,
            and enjoy films from all around the world.
          </p>
          <p className="text-lg text-gray-700">
            Our journey started with a simple idea: to create a platform that
            offers a seamless and engaging experience for movie fans. Over the
            years, we have grown and evolved, adding more features, movies, and
            content that make our portal the ultimate destination for all things
            cinema.
          </p>{' '}
          <br />
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to bring movie lovers together by offering a diverse
            range of films from various genres, languages, and cultures. We
            strive to provide an engaging, seamless experience where movie
            enthusiasts can discover their next favorite film.
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>

      <div className="my-14 text-center">
        <h2 className="text-2xl font-semibold  ">Meet Our Beautiful Team</h2>
        <p className="text-base text-gray-500">
          Our philosophy is simple; Hire great people and give theme the <br />
          resources and support to do their best work
        </p>
        <div className="flex w-4/6 justify-center mx-auto gap-9 mt-16">
          <div className="relative">
            <img className="w-32 h-32 " src={team1} alt="" />
            <p className="absolute bottom-0 text-gray-300 p-3 ">Neela</p>
          </div>
          <div className="relative">
            <img className="w-32 h-32 " src={team3} alt="" />
            <p className="absolute bottom-0 text-gray-300 p-3 ">Hayat</p>
          </div>
          <div className="relative">
            <img className="w-32 h-32 " src={team2} alt="" />
            <p className="absolute bottom-0 text-gray-900 font-semibold p-2 ">
              Ababil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
