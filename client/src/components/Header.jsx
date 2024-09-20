/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { UserButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";

function header() {
  return (
    <div className="flex justify-between items-center p-3 ring-1 ring-black m-3 rounded-xl">
      <div className="flex items-center gap-2 googlehandfont ">
        <img src="/logo.svg" />
        <p className="text-xl font-bold mb-1 sm:block hidden">OwnaCar</p>
      </div>
      <div className="md:flex gap-12 font-bold googlehandfont md:visible hidden
      ">
        <div>home</div>
        <div>Search</div>
        <div>Contact</div>
      </div>
      <div className="flex gap-4 w-fit">
        <UserButton />
        <Button className="bg-blue-700 text-white rounded-xl hover:text-black">SUBMIT LISTING</Button>
      </div>
    </div>
  );
}

export default header;
