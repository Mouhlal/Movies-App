import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function Search() {
  const location = useLocation();
  const { results } = location.state;

  return (
    <div className="md:flex overflow-x-hidden md:overflow-visible md:flex-row m-3 md:justify-around md:items-center flex-wrap relative  md:gap-2">
      {results.map((res, index) => (
        <Card className="mt-9 w-96 relative top-24 " key={index}>
          <Link
            to={
              res.first_air_date ? `/detailstv/${res.id}` : `/details/${res.id}`
            }
          >
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
                alt={res.title || res.name}
              />
            </CardHeader>
            <CardBody>
              <Typography color="blue-gray" className="mb-2">
                <b>{res.title || res.name}</b>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="blue">Details</Button>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default Search;
