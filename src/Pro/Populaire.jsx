import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Populaire() {
  const { id } = useParams();
  const [pop, setPop] = useState([]);

  const url ="https://api.themoviedb.org/3/trending/tv/day?api_key=88b60c5482edd09652277b85a70bde63";
  //const url2 = "https://api.themoviedb.org/3/trending/movie/day?api_key=88b60c5482edd09652277b85a70bde63"

  const getapi = async () => {
    try {
      const response = await axios.get(url);
      setPop(response.data);
      //console.log(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    getapi();
  }, [id]);

  /* const getApi2 = async () => {
    try {
      const response = await axios.get(url2);
      setPop(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    getApi2();
  }, [id]); */

  return (
    <div className="md:flex overflow-x-hidden md:overflow-visible md:flex-row m-3 md:justify-around md:items-center flex-wrap relative  md:gap-2">
      {pop.results &&
        pop.results.map((ser) => (
          <div key={ser.id}>
            <Card className="mt-9 w-96 relative top-24 ">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={`https://image.tmdb.org/t/p/w500${ser.backdrop_path}`}
                  alt={ser.name}
                />
              </CardHeader>
              <CardBody>
                <Typography color="blue-gray" className="mb-2">
                  <b>{ser.name}</b>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/detailstv/${ser.id}`}>
                <Button
                    variant="text"
                    className="flex items-center gap-2 bg-black text-white"
                  >
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
    </div>
  );
}
