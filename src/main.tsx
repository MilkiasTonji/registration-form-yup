import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Service from './components/services/Service.tsx'
import About from './components/about/About.tsx'
import Contact from './components/contact/Contact.tsx'
import ErrorPage from './ErrorPage.tsx'
import TodoList from './components/home/TodoList.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <TodoList />
  },
  {
    path: '/services',
    element: <Service />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
