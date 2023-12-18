import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss';
import Layout from 'components/Layout/Layout';
import Home from 'components/Home/Home';
import AboutPage from 'components/About/AboutPage';
import ContactPage from 'components/Contact/ContactPage';


const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
