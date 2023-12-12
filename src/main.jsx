import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Header/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EmailLogIn from './components/Email/EmailLogIn.jsx'
import EmailSignIn from './components/Email/EmailSignIn.jsx'
import GoogleLogIn from './components/Google/GoogleLogIn.jsx'
import GoogleSignIn from './components/Google/GoogleSignIn.jsx'
import AuthProvider from './components/Provider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
    ,
    children: [
      {
        path: "/",
        element: <></>,
      }, {
        path: "/emailLogIn",
        element: <EmailLogIn></EmailLogIn>,
      }
      , {
        path: "/emailSignIn",
        element: <EmailSignIn></EmailSignIn>,
      }
      , {
        path: "/googleLogIn",
        element: <GoogleLogIn></GoogleLogIn>,
      }
      , {
        path: "/googleSignIn",
        element: <GoogleSignIn></GoogleSignIn>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
