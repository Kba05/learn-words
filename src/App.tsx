import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Cards } from './pages/Cards/Cards';
import { Profile } from './pages/Profile/Profile';
import { Layout } from './components/Layout';
import { useAppDispatch } from './app/hooks';
import { getWordsWithCategoriesFetch } from './features/AppState/appStateReducer';
import { RequireSignIn } from './components/RequireSignIn';


const App = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getWordsWithCategoriesFetch())
  },[])

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Main/>
        },
        {
          path: "/cards",
          element: <RequireSignIn><Cards/></RequireSignIn>
        },
        {
          path: "/profile",
          element: <RequireSignIn><Profile/></RequireSignIn>
        },
      ]
     
    }

  ]);

  return (<RouterProvider router={router}/>);
}

export default App;
