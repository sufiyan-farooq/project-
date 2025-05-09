import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = ['Product', 'Solutions', 'Support', 'Customers', 'Pricing'];

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: "1px solid lightgray", padding: "4px", backgroundColor: "white" }}>
        {/* AppBar full width background */}

        <Toolbar>
          {/* Container to limit text width and center */}
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Left Logo */}
            <Typography sx={{ fontWeight: 'bold', color: '#00a859', fontSize: '25px' }}>
              SAFECOM
            </Typography>

            {/* Center Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: 'black',
                    fontWeight: 550,
                    borderBottom: '2px solid transparent',
                    borderRadius: 0,

                    paddingBottom: '20px',
                    paddingTop:"20px", 
                    '&:hover': {
                      color: '#00a859',
                      fontWeight: 600,
                      borderBottom: '2px solid #00a859',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Right Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button variant="outlined"  sx={{
              
                border: "2px solid #0073ce",
                transition: "all 0.3s ease",
                '&:hover': {
                  backgroundColor: '#0073ce',
                  border: "2px solid #0073ce",
                  color: 'white',


                  transform: "scale(1.05)"
                }
              }}>
                Log In
            
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#00a859', '&:hover': { backgroundColor: '#00964f' } }}>
                Sign Up Free
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, mt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <ListItem button>
              <Button
                variant="outlined"
                fullWidth
                sx={{ borderColor: '#0073ce', color: '#0073ce' }}
              >
                Log In
              </Button>
            </ListItem>
            <ListItem button>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#00a859', '&:hover': { backgroundColor: '#00964f' } }}
              >
                Sign Up Free
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
