/* eslint-disable no-unused-vars */
import { React } from "react";
import { SignedIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearched from "./components/MostSearched";
function Home() {
  return (
    <div className="h-[3000px]">
      <Header/>
      <Hero/>
      <Category/>
      <MostSearched/>
    </div>
  );
}

export default Home;
