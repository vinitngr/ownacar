import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx'
import Index from './profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import AddListing from './addListing'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>
  },
  {
    path: "/profile",
    element: <Index/>
  },
  {
    path: "/addListing",
    element: <AddListing/>
  },
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
} 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
         <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
