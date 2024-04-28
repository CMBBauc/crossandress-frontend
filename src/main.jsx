import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './HomePage.jsx'
import About from './About.jsx'
import Sermons from './Sermons.jsx'
import Quotes from './Quotes.jsx'
import EnterUser from './EnterUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/Sermons',
        element: <Sermons/>,
      },
      {
        path: '/Quotes',
        element: <Quotes/>,
      },
      {
        path: '/About',
        element: <About/>,
      },
      {
        path: '/login-signup',
        element: <EnterUser />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

)
