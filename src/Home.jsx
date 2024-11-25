/* eslint-disable no-unused-vars */
import { React } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearched from "./components/MostSearched";
import Footer from "./components/Footer";
import Other from "./components/Other";
import { db } from "./lib/db";
import { listingsTable } from "./lib/schema";
function Home() {

  return (
    <div className="selection:bg-yellow-200">
      <Header/>
      <Hero/>
      <Category/>
      <MostSearched/>
      <Other/>
      <Footer/>
    </div>
  );
}

export default Home;
