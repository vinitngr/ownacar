import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  return (
    <div>
    <SignedIn>
      {children}
    </SignedIn>
    <SignedOut>
      <Navigate to="/404" replace />  {/* Redirect to a 404 page or another route */}
    </SignedOut>
    </div>
  );
};

 export default ProtectedRoute