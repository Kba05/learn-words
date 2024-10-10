import React from 'react'
import { Container } from '@mui/material';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { useAppSelector } from '../app/hooks';
import { selectSignInInfo } from '../features/AppState/appStateReducer';

export const Layout = () => {
  const signInInfo = useAppSelector(selectSignInInfo)
  return (
    <Container sx={{height:"100vh", display:"flex", justifyContent:'space-between', flexDirection:"column"}}>
      <Header signInData={signInInfo} />
        <Outlet/>
      <Footer/>
    </Container>
  )
}
