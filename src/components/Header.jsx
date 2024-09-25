
import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center p-3 ring-1 ring-black m-3 rounded-xl">
      <div className="flex items-center gap-2 googlehandfont ">
        <img src="/logo.svg" />
        <Link to="/">
          <p className="text-xl font-bold mb-1 sm:block hidden ">
            OwnaCar
          </p>
        </Link>
      </div>
      <div className="md:flex gap-12 font-bold googlehandfont md:visible hidden
      ">
        <Link to="/">
        <div className="cursor-pointer">home</div></Link>
        <div className="cursor-pointer">Search</div>
        <div
          // onClick={() => {
          //   if (window.document.name === 'home') {
          //     window.location.href = '#footer';
          //   } else {
          //     window.location.href = '../../try.html'; // Replace with your desired route
          //   }
          // }}
          onClick={() => {
            window.document.title == "Home - OwnaCar" ?
              window.location.href = '#footer' :
              window.location.href = '../../try.html'; // Replace with your desired route

          }}
          className="cursor-pointer"
        >
          Contact
        </div>


      </div>
      <div className="flex gap-4 w-fit">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <Button className="bg-blue-700 text-white  hover:text-black">Sign In</Button>
          </SignInButton>
        )}

        <Link to={isSignedIn ? '/profile' : '/404'}>
          <Button className="bg-blue-700 text-white rounded hover:text-black">SUBMIT LISTING</Button>
        </Link>


      </div>
    </div>
  );
}

export default header;
