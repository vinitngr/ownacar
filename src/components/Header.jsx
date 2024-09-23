/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { UserButton, useSignIn, useUser, SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center p-3 ring-1 ring-black m-3 rounded-xl">
      <div className="flex items-center gap-2 googlehandfont ">
        <img src="/logo.svg" />
        <Link to="/">
          <p className="text-xl font-bold mb-1 sm:block hidden">
            OwnaCar
          </p>
        </Link>
      </div>
      <div className="md:flex gap-12 font-bold googlehandfont md:visible hidden
      ">
        <div>home</div>
        <div>Search</div>
        <div
          onClick={() => window.location.href = '#footer'}>Contact</div>
      </div>
      <div className="flex gap-4 w-fit">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <Button className="bg-blue-700 text-white rounded-xl hover:text-black">Sign In</Button>
          </SignInButton>
        )}

        <Link to={isSignedIn ? '/profile' : 'https://dominant-duck-72.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2FaddListing'}>
          <Button className="bg-blue-700 text-white rounded-xl hover:text-black">SUBMIT LISTING</Button>
        </Link>


      </div>
    </div>
  );
}

export default header;
