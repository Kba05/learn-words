import React, { useState } from 'react'
import { ManageAccounts, LocalLibrary, Login, Logout } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { signOut } from '../features/AppState/appStateReducer';
import { ISignIn, User } from '../types/types';
import { ROUTES } from '../constants/constants';

export const Header = ({signInData,userInfo}:{signInData:ISignIn, userInfo:User}) => {
  const {success} = signInData
  const [userTooltip, setUserTooltip] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  
  const dispatch = useAppDispatch()

  const openUserTooltip = (event: React.MouseEvent<HTMLElement>) => setUserTooltip(event.currentTarget)
  const closeUserTooltip = () => setUserTooltip(null)
  const handleSignOut = ()=>{
    dispatch(signOut())
    navigate(ROUTES.LOGIN)
  }
  return (
    <AppBar
      component="header"
      position="static"
      color='transparent'
      sx={{
        mt: "10px",
        mb: "50px",
        p: "10px",
        borderRadius: "10px",
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Link to={ROUTES.MAIN} style={{textDecoration:'none',color: 'black'}}>   
          <Typography
            variant="h5"
            component='span'
            noWrap
            sx={{
              display: 'flex',
              alignItems: "center",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
              <LocalLibrary />
              LearnWords
          </Typography>
        </Link>

        <Divider orientation="vertical" flexItem />

        {
          success
          &&
          <Button color='primary' sx={{ color: "black", fontWeight: 700 }} onClick={() => navigate(ROUTES.CARDS)}>
            Words
          </Button>
        }

      </Box>

      {
        success
          ?
          <Box>
            <Button endIcon={<Avatar alt={userInfo.first_name} src="/" />} onClick={openUserTooltip} sx={{ p: 0, color: "black"}} >
              {userInfo.first_name}
            </Button>

            <Menu
              sx={{ mt: '45px' }}
              anchorEl={userTooltip}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userTooltip)}
              onClose={closeUserTooltip}
            >
              <MenuItem key={'1010101'} onClick={() => navigate(ROUTES.PROFILE)}>
                <ManageAccounts color="primary" />Profile
              </MenuItem>
              <MenuItem key={'2020202'} onClick={handleSignOut}>
                <Logout color="primary" /> Sign out
              </MenuItem>
            </Menu>
          </Box>
          :
          <Button sx={{ color: "black" }} startIcon={<Login/>} onClick={() => navigate(ROUTES.LOGIN)}>
            Sign in
          </Button>
        }


    </AppBar>
  )
}
