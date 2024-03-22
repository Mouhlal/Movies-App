import React from "react";
import Header from "./Pro/Header";
import Footer from "./Pro/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pro/Home";
import Details from "./Pro/Details";
import Populaire from "./Pro/Populaire";
import Top from "./Pro/Top";
import Tv from "./Pro/tv";
import Detailstv from "./Pro/detailstv";
import Search from "./Pro/Search";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/detailstv/:id" element={<Detailstv />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/top" element={<Top />} />
        <Route path="/populaire" element={<Populaire />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
