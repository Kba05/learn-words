import React from 'react'
import { Box, Button, Card, Divider, Typography } from '@mui/material'

export const Main = () => {

  return (
    <>
      <Box sx={{
        height: "500px",
        backgroundImage: 'url(./img/pngaaa.com-665997.png)',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'right',
        display: "flex",
        alignItems: "center",
      }}>
        <Typography variant='h2' align='left' color='black' width='600px'>
          Unlock the Power of English: Learn New Words Today!
        </Typography>
      </Box>

      <Divider sx={{ my: "50px" }} />

      <Box sx={{
        height: "500px",
        display: "flex",
        alignItems: "center",
      }}>
        <img src="./img/pngaaa.com-666051.png" alt="fun" />
        <Typography variant='h4' align='center' color='black'>
          Welcome to our platform designed to help you build your English vocabulary in a fun and engaging way.
        </Typography>
      </Box>

      <Divider sx={{ my: "50px" }} />

      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <img style={{ objectFit: 'contain', width: "100%", height: "300px" }} src="./img/pngaaa.com-2517473.png" alt="card1" />
            <Typography variant='h5' align='center' color='black' p="20px">
              Briefly highlight the main features of your website, like word lists, progress tracking, etc.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <img style={{ objectFit: 'contain', width: "100%", height: "300px" }} src="./img/pngaaa.com-2517540.png" alt="card1" />
            <Typography variant='h5' align='center' color='black' p="20px">
              Mention the benefits of using your platform, such as improved communication skills, increased confidence, and better understanding of English.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <img style={{ objectFit: 'contain', width: "100%", height: "300px" }} src="./img/pngaaa.com-665974.png" alt="card1" />
            <Typography variant='h5' align='center' color='black' p="20px">
              If you have any, include testimonials from satisfied users.
            </Typography>
          </Card>
        </Box>
      </Box>

      <Divider sx={{ my: "50px" }} />

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <Typography variant='h3' align='center' color='black' my="40px">
          Sign Up Now and Start Learning!
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ width: "300px", height: "50px", fontSize: "30px", mb:"30px" }}>
          Sign Up
        </Button>
        <img src="./img/pngaaa.com-2517579.png" alt="fun" style={{ objectFit: 'contain', width: "100%", height: "100%" }} />
      </Box>
    </>
  )
}
