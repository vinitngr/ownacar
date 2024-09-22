import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './home.jsx';
import Index from './profile';
import AddListing from './addListing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TitleWrapper title="Home - OwnaCar" component={<Home />} /> ,
  },
  {
    path: "/profile",
    element: <TitleWrapper title="Profile - OwnaCar" component={<Index />} />,
  },
  {
    path: "/addListing",
    element: <TitleWrapper title="Add Listing - OwnaCar" component={<AddListing />} />,
  },
]);

// Wrapper to handle setting the document title
function TitleWrapper({ title, component }) {
  document.title = title;
  return component;
}

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);
