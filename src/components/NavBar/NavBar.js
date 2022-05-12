//UpperCamelCase
import './NavBar.css'
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';

const pages = ['Inicio', 'Quienes somos', 'Proyectos','Productos','Servicios','Contacto']; // Nombre de las paginas

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);//Uso de Hook. anchorElNav es una variable, useState es una funcion

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">          
        <Toolbar disableGutters>      
          <div className="desktop-nav-logo">
            <div className="desktop-nav-logo-img">
              <Avatar  
                alt="Logo ENGENIUM" 
                src="./logo.png" 
                sx={{ 
                  width: 100, 
                  height: 100,
                  mr: 2,
                  display: { xs: 'none', md: 'flex' }
                }}
              />
            </div>
            <div className="desktop-nav-logo-nombre">
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ENGENIUM
              </Typography>
            </div>
          </div>         
          <div className="desktop-listado">
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
            </Box>
          </div>


          <div className="mobile-nav-logo">
            <div>
              <Avatar  
                alt="Logo ENGENIUM" 
                src="./logo.png" 
                sx={{ 
                  width: 100, 
                  height: 100,
                  mr: 2,
                  display: { xs: 'flex', md: 'none' }
                }}
              />  
            </div>
            <div className="mobile-nav-logo-nombre">
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ENGENIUM
              </Typography>   
            </div>   
          </div>        
          <div className="mobile-listado">  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> 
            
          </div> 
               
                  
        </Toolbar>
      
    </AppBar>
  );
};
export default ResponsiveAppBar;
