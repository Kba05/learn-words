import { Home, LocalLibrary } from '@mui/icons-material'
import { Box, Button, FormGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ISignInData } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSignInInfo, signInFetch } from '../../features/AppState/appStateReducer';

export const Login = () => {
  const [isError, setIsError] = useState<Boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const signInInfo = useAppSelector(selectSignInInfo)

  const fromPage = location.state ? location.state.from.pathname : '/'

  const signInRef = useRef<ISignInData>({
    login:'',
    password:''
  })

  useEffect(()=>{
    if(signInInfo.success) navigate(fromPage)
    if(signInInfo.error) setIsError(true)
  },[signInInfo,navigate,fromPage,setIsError])

  const handleSignIn = ()=>{
    const payload = signInRef.current
    dispatch(signInFetch(payload))
  }

  console.log(fromPage)

  return (
    <Box
      component='div'
      sx={{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        height: '100vh'
      }}>

      <Button 
        variant="text" 
        startIcon={<Home />} 
        sx={{color:"black"}}
        onClick={()=>navigate('/')}>
        Go to main page
      </Button>

      <Typography
        variant="h5"
        sx={{
          display: 'flex',
          alignItems: "center",
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize: '40px',
          letterSpacing: '.3rem',
          color: 'inherit',
          mb: '50px'
        }}>
        <LocalLibrary fontSize="large" />
        LearnWords
      </Typography>

      <FormGroup
        sx={{
          width: "500px",
          display: "flex",
          gap: "25px",
          flexDirection: "column"
        }}>
        <TextField label="Login" variant="outlined" onChange={(evt)=>signInRef.current.login = evt.target.value }/>
        <TextField label="Password" variant="outlined" type="password" onChange={(evt)=>signInRef.current.password = evt.target.value }/>
        {isError&&<Typography color='error'>{signInInfo.error_text}</Typography>}
        <Button variant="contained" onClick={handleSignIn}>Sign in</Button>
      </FormGroup>

    </Box>
  )
}
