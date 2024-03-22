import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=88b60c5482edd09652277b85a70bde63`
        );
        setMovieDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Fetching movie details error", error);
      }
    };

    getMovieDetails();
  }, [id]);

  const castURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=88b60c5482edd09652277b85a70bde63`;

  useEffect(() => {
    const getCast = async () => {
      try {
        const castResponse = await axios.get(castURL);
        setCast(castResponse.data.cast);
        //console.log(castResponse.data.cast);
        setCast(castResponse.data.cast.slice(0, 9));
      } catch (error) {
        console.log("Error fetching cast", error);
      }
    };
    getCast();
  }, [castURL]);

  return (
    <div className="relative md:top-20 md:max-h-screen top-20">
      <div className="relative overflow-x-hidden">
        <div className="md:relative">
          <Link
            to={movieDetails.homepage}
            target="_blank"
            className="hover:text-red-600 text-black md:inline-block md:left-1/2 text-center md:relative"
          >
            <p className="text-3xl md:w-96 underline md:text-center  md:bottom-11 p-4 relative text-center m-8 bottom-11">
              {" "}
              {movieDetails.title}{" "}
            </p>
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt=""
            className="md:m-5 p-1 relative md:text-left md:left-5 bottom-9 md:bottom-20 rounded-xl"
          />{" "}
        </div>
        <br />
        <div className="m-5 relative md:bottom-96 md:w-2/4 md:left-96 flex flex-col bottom-11">
          <div className="bg-black text-center md:ml-16 md:left-1/4 relative md:bottom-12 text-wrap  text-white m-2 p-4 rounded-xl">
            {" "}
            <p className="text-wrap relative">{movieDetails.overview}</p>{" "}
          </div>

          <div className="bg-black text-center md:bottom-11  md:ml-16 relative md:left-1/4 text-white m-2 p-4 rounded-xl">
            <p className="m-2 text-gray-400">Genres :</p>
            {movieDetails.genres &&
              movieDetails.genres.map((genres, index) => (
                <p key={index} className="flexflex-row gap-4">
                  {genres.name}{" "}
                </p>
              ))}
            <p>
              {" "}
              <span className="text-gray-400">Release Date </span>:{" "}
              {movieDetails.release_date}{" "}
            </p>
            <p>
              {" "}
              <span className="text-gray-400">Status</span>:{" "}
              {movieDetails.status}{" "}
            </p>
            <p>
              {" "}
              <span className="text-gray-400">Rate :</span>{" "}
              {movieDetails.vote_average}{" "}
            </p>
          </div>
        </div>
        <div className="md:relative md:bottom-80">
          <p className="text-2xl relative bottom-11 m-1 p-3 bg-black rounded-xl text-white text-center">
            {" "}
            Cast :{" "}
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-around items-center md:overflow-hidden relative bottom-8 m-5">
            {cast.map((actor) => (
              <div key={actor.id} className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="md:m-5 h-36 rounded-md"
                />
                <p className="text-wrap w-8">{actor.name}</p> <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
