import Image from "next/image";
import Link from "next/link";
import { SlLike } from "react-icons/sl";

export default function Card({ result }) {

  return (
    <div className="group cursor-pointer sm:hover:border-amber-600 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <img src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`} alt="Movie Image" className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-[500px] h-[200px]" />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <SlLike className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
