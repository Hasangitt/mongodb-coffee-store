import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Coffees from './components/Coffees.jsx';
import UpdateCoffees from './components/UpdateCoffees.jsx';
import AuthProvider from './components/Auth/AuthProvider.jsx';
import SignIn from './components/Auth/SignIn.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import Users from './components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/coffees",
    element: <Coffees></Coffees>,
   loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: "/update/:id",
    element: <UpdateCoffees></UpdateCoffees>,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch ('http://localhost:5000/users')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
