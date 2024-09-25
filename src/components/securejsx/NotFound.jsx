import { SignInButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";

const NotFound = () => {
    return (
        <div className="text-center h-screen content-center">
        <h1 >SIGN IN TO ACCESS THIS PAGE</h1>
        <SignInButton forceRedirectUrl="/profile">
            <Button className="bg-blue-700 text-white m-3 hover:text-black">SIGN IN</Button>
        </SignInButton>
        </div>
    )
  };
  

export default NotFound
