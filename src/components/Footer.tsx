import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import {AlternateEmail, LocalPhone, LocationOn} from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box component="footer" mt="50px">
      <Divider orientation="horizontal"/>
      
      <Box display="flex" justifyContent="space-between" marginY="20px">
        <Typography display="flex">
          <LocationOn/>
          271 Dominica Circle, Niceville, FL 32578, United States
        </Typography>
        <Typography display="flex">
          <LocalPhone/>
          +1 703-697-1776
        </Typography>

        <Typography display="flex">
          <AlternateEmail/>
          demolink@learnwords.com
        </Typography>
      </Box>

      <Divider orientation="horizontal"/>
      
      <Typography component="p" textAlign="center" paddingY="20px">
        LearnWords All Rights Reserved
      </Typography>
    </Box>
  )
}
