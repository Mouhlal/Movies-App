import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Tv() {
  const [series, setSeries] = useState([]);
  const url =
    "https://api.themoviedb.org/3/discover/tv?api_key=88b60c5482edd09652277b85a70bde63";
  const getApi = async () => {
    try {
      const { data } = await axios.get(url);
      setSeries(data.results);
      console.log(data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="md:flex overflow-x-hidden md:overflow-visible md:flex-row m-3 md:justify-around md:items-center flex-wrap relative  md:gap-2">
      {series.map((ser) => {
        return (
          <div>
            <Card className="mt-9 w-96 relative top-24" key={ser.id}>
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
                  <Button color="blue">Details</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
