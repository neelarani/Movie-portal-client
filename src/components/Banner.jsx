import banner1 from '../assets/neela.avif';
import banner2 from '../assets/neelaa.avif';
import banner3 from '../assets/bannerpic.avif';
import banner4 from '../assets/banner5.avif';

const Banner = () => {
  return (
    <div className="carousel w-full h-[550px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute left-32 text-white top-52 space-y-3">
          <h1 className="text-lg md:text-3xl  font-semibold">
            Welcome to Your Movie Universe
          </h1>
          <p className="text-base text-gray-400">
            Dive into a world of endless movies and discover your next favorite
            film.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle bg-gray-500">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-gray-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute left-32 text-white top-52 space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">
            Your Entertainment Destination
          </h1>
          <p className="text-base text-gray-400">
            From Hollywood to Bollywood, classics to blockbusters—everything you
            love, all in one place.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute left-32 text-white top-52 space-y-3">
          <h1 className="text-lg md:text-3xl  font-semibold">
            Make Movie Nights Magical
          </h1>
          <p className="text-base text-gray-400 ">
            Pick a movie that matches your mood and create unforgettable
            moments. <br /> These captions will make your movie portal engaging
            and relevant to your audience.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute left-32 text-white top-52 space-y-3">
          <h1 className="text-lg md:text-3xl  font-semibold">
            Experience Cinema Like Never Before
          </h1>
          <p className="text-base text-gray-400">
            Explore thrilling stories, unforgettable characters, and
            breathtaking visuals—all from the comfort of your home.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
