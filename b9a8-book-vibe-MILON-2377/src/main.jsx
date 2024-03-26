import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import Home from './components/Home.jsx';
import ListBooks from './components/ListBooks.jsx';
import PagesRead from './components/PagesRead.jsx';
import BookDetails from './components/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('BooksData.json')
      },
      {
        path: '/listedbooks',
        element: <ListBooks></ListBooks>
      },
      {
        path: '/pagesread',
        element: <PagesRead></PagesRead>
      },
      {
        path: '/:bookId',
        element: <BookDetails></BookDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
