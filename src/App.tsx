import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Cards } from './pages/Cards/Cards';
import { Profile } from './pages/Profile/Profile';
import { Layout } from './components/Layout';
import { ROUTES } from './constants/constants';


const App = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.LOGIN,
      element: <Login/>
    },
    {
      element: <Layout/>,
      children: [
        {
          path: ROUTES.MAIN,
          element: <Main/>
        },
        {
          path: ROUTES.CARDS,
          element: <Cards/>
        },
        {
          path: ROUTES.PROFILE,
          element: <Profile/>
        },
      ]
     
    }

  ]);

  return (<RouterProvider router={router}/>);
}

export default App;
