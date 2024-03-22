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
export default function Top() {
  const { id } = useParams();
  const [rate, setRate] = useState([]);
  const url =
    "https://api.themoviedb.org/3/tv/top_rated?api_key=88b60c5482edd09652277b85a70bde63";

  const getApi = async () => {
    try {
      const data = await axios.get(url);
      setRate(data.data);
      //console.log(data.data)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="md:flex overflow-x-hidden md:overflow-visible md:flex-row m-3 md:justify-around md:items-center flex-wrap relative  md:gap-2">
      {rate.results &&
        rate.results.map((ser) => (
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
