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
          className="rounded-lg w-full h-[300px]"
        />
        <div className="p-3">
            <h2 className="text-2xl mb-4 font-bold">{movie.title || movie.name}</h2>
            <p className="text-lg mb-4">{movie.overview}</p>
            <p className="mb-4">
                <span className="font-semibold mr-2">Date Released:</span>
                {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-4">
                <span className="font-semibold mr-2">Rating:</span>
                {movie.vote_count}
            </p>
        </div>
      </div>
    </div>
  );
}
