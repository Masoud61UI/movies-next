import { SlLike } from "react-icons/sl";
import { BsCalendar2Date } from "react-icons/bs";

export default async function page({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Movie Image"
          className="rounded-lg basis-2/6 w-[500px] h-[300px]"
        />
        <div className="p-3 basis-4/6 w-full">
          <h2 className="text-3xl mb-5 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-6">{movie.overview}</p>
          <div className="mb-4 flex items-center">
            <div className="flex items-center">
              <BsCalendar2Date className="h-5 mr-2" />
              <span className="font-semibold mr-2">Date Released:</span>
            </div>
            <p>{movie.release_date || movie.first_air_date}</p>
          </div>
          <div className="mb-4 flex items-center">
            <div className="flex items-center">
              <SlLike className="h-5 mr-2" />
              <span className="font-semibold mr-2">Rating:</span>
            </div>
            <p>{movie.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
