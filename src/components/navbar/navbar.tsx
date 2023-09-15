import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { navItems } from '@/config/constants';
import CloseIcon from '@mui/icons-material/Close';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';

interface Props {

  window?: () => Window;
}



const Navbar = ({window} : Props) => {
    
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{display : "flex" , justifyContent: "space-between" , alignItems: "center", paddingX: "15px"}}>
      <Box sx={{ my: 2, display: "flex",  alignItems: "center",gap : "5px" }}>
        <QrCode2TwoToneIcon/>
        <Typography variant="h6" >
          AbduDev
        </Typography>
      </Box>
       <CloseIcon />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const drawerWidth = "100%"
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box  height={"8vh"} sx={{display : "flex"}}>
       <AppBar component="nav" sx={{height: "8vh", backgroundColor:"#171d14"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
            <MenuIcon />
            </IconButton>
            <Box sx={{ alignItems : "center",gap: "5px", my: "2px",flexGrow: 1, display: { xs: 'none', sm: 'flex' }}}>
              <QrCode2TwoToneIcon/>
              <Typography
                variant="h6"
                component="div"
              >
                AbduDev
              </Typography>

            </Box > 
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.route} sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              ))}
            </Box>
        </Toolbar>
       </AppBar>
       <nav>
         <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
         
        </Drawer>
       </nav>
    </Box>
  )
}


export default Navbar