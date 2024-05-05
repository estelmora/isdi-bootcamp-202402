import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from './pages/Home.tsx';
import Register from './pages/Register.tsx';
import Podcast from './pages/Podcast.tsx';
import Login from './pages/Login.tsx'

import { logger, Logger } from './utils'
logger.level = Logger.DEBUG

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/podcasts/:podcastId",
    element: <Podcast />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
