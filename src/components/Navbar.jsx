import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, Box,
  Container, IconButton, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Now navItems have both label & path
  const navItems = [
    { label: 'Product', path: '/' },
    { label: 'Solutions', path: '/' },
    { label: 'Support', path: '/' },
    { label: 'Customers', path: '/' },
    { label: 'Pricing', path: '/pricing' },
  ];

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: "1px solid lightgray", padding: "4px", backgroundColor: "white" }}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Left Logo */}
            <Typography sx={{ fontWeight: 'bold', color: '#00a859', fontSize: '25px' }}>
              <Link to={'/'}>SAFECOM</Link>
            </Typography>

            {/* Center Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'black',
                    fontWeight: 550,
                    borderBottom: '2px solid transparent',
                    borderRadius: 0,
                   
                    '&:hover': {
                      color: '#00a859',
                      fontWeight: 600,
                      borderBottom: '2px solid #00a859',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Right Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button variant="outlined" sx={{
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
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => setDrawerOpen(false)}  // Drawer closes on click
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    color: 'black',
                    fontWeight: 550,
                    borderBottom: '2px solid transparent',
                    borderRadius: 0,
                    cursor: "pointer",
                    paddingBottom: '6px',
                    paddingTop: "4px",
                    '&:hover': {
                      color: '#00a859',
                      fontWeight: 600,
                      borderBottom: '2px solid #00a859',
                      backgroundColor: 'transparent',
                    }
                  }}
                />
              </ListItem>
            ))}

            <ListItem button>
              <Button variant="outlined" fullWidth sx={{
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
