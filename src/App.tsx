import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import AddListings from './pages/AddListings/AddListings.tsx'
import Listings from './pages/Listings/Listings.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <MainLayout/>, errorElement: <ErrorPage/>,
      children: [
        { path: '', element: <Home/> },
        { path: 'add-listing', element: <AddListings/> },
        { path: 'listings', element: <Listings/> }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
