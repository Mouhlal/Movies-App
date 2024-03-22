import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
export default function Header() {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const handlesearch = async (t) => {
    t.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/multi?api_key=88b60c5482edd09652277b85a70bde63&query=${search}`;
      const response = await axios.get(url);
      const data = response.data.results;
      console.log("Search Results:", data);
      nav(`/search?query=${search}`, { state: { results: data } });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="max-h-screen">
      <div className="antialiased bg-gray-400 dark-mode:bg-gray-900 ">
        <div className="w-full text-white bg-black dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col p-2  max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <Link
                to="/"
                className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                AM Sr
              </Link>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(!open)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    style={{ display: !open ? "none" : "block" }}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    style={{ display: open ? "none" : "block" }}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow ${
                open ? "hidden" : ""
              } pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
            >
              <Link
                to="/top"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Top Rated
              </Link>
              <Link
                to="/populaire"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Populaire
              </Link>

              <Menu>
                <MenuHandler>
                  <Button className="bg-black">Type</Button>
                </MenuHandler>
                <MenuList className="bg-black text-white">
                  <Link to={"/tv"} className="no-underline no-border">
                    <MenuItem>TV</MenuItem>
                  </Link>
                  <Link to={"/"}>
                    <MenuItem>Movies</MenuItem>
                  </Link>
                </MenuList>
              </Menu>

              <form onChange={handlesearch}>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={search}
                    onChange={(r) => setSearch(r.target.value)}
                    placeholder="Search..."
                    className="px-4 py-2 mr-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:text-gray-200 focus:outline-none focus:ring focus:ring-black "
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-semibold bg-white rounded-lg text-black focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
                  >
                    Search
                  </button>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
