import { Box, Typography } from '@mui/material'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { format } from 'date-fns';
const Footer = () => {
  return (
    <Box sx={{display : "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#171d14", color: "white"}} padding={"20px"}>
      <Typography variant='h6' >
        
          Footer 
        
        @{format(new Date(), "yyyy")} AbduDev.All rights reserved.
      </Typography>
        <Box sx={{display:"flex", justifyContent : "space-between", alignItems : "center" , gap : "8px"}}>
          <TelegramIcon sx={{cursor: "pointer"}}/>
          <InstagramIcon sx={{cursor: "pointer"}}/>
          <LinkedInIcon sx={{cursor: "pointer"}}/>
        </Box>
    </Box>
  )
}

export default Footer