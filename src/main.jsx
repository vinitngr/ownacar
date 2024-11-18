import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './home.jsx';
import Index from './profile';
import AddListing from './addListing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
// import { SignedOut, SignedIn} from '@clerk/clerk-react';
import ProtectedRoute   from './components/securejsx/ProtectedRoute';
import NotFound from './components/securejsx/NotFound';
import SearchCars from './components/searchPage/SearchCars';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TitleWrapper title="Home - OwnaCar" component={<Home />} />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <TitleWrapper title="Profile - OwnaCar" component={<Index />} />
      </ProtectedRoute>
    ),
  },
  {
    path: "/addListing",
    element: (
      <ProtectedRoute>
        <TitleWrapper title="Add Listing - OwnaCar" component={<AddListing />} />
      </ProtectedRoute>
    ),
  },
  {
    path: "/search",
    element: (
        <TitleWrapper title="ownacar" component={<SearchCars/>} />
    ),
  },
  {
    path: "/404",
    element: <NotFound />,
  },
]);


// eslint-disable-next-line react-refresh/only-export-components
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
