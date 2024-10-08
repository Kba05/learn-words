import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Cards } from './pages/Cards/Cards';
import { Profile } from './pages/Profile/Profile';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/cards",
      element: <Cards/>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
  ]);

  return (
    <div className="App">
      <header></header>
        <RouterProvider router={router}/>
      <footer></footer>
    </div>
  );
}

export default App;
