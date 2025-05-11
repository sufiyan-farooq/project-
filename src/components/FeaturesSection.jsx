import React, { useEffect } from 'react';
import { Container, Grid, Typography, Card, CardContent, Box, Avatar } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GroupIcon from '@mui/icons-material/Group';

import AOS from 'aos';
import 'aos/dist/aos.css';

const iconMap = {
  'Forms Management': <AssignmentIcon />,
  'AI Chatbot': <ChatIcon />,
  'Job Sites Management': <WorkIcon />,
  'Attendance Tracking': <AccessTimeIcon />,
  'Export Reports': <PictureAsPdfIcon />,
  'Manage Your Team': <GroupIcon />,
};

const features = [
  { title: 'Forms Management', desc: 'Easily manage Sign In, Hazard Reports...', color: '#00a859' },
  { title: 'AI Chatbot', desc: 'Get instant answers for region-specific...', color: '#0073ce' },
  { title: 'Job Sites Management', desc: 'Track and manage multiple construction...', color: '#00a859' },
  { title: 'Attendance Tracking', desc: 'Monitor field worker attendance...', color: '#0073ce' },
  { title: 'Export Reports', desc: 'Download form submissions as PDF...', color: '#00a859' },
  { title: 'Manage Your Team', desc: 'Add managers & staff beyond field...', color: '#0073ce' },
];
const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out-sine',
      once: true,
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: 8, marginTop: '60px' }}>
      <Container maxWidth="lg">
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6"
          data-aos="fade-up"
        >
          All-in-One Safety & Compliance Tools
        </h1>
        <Grid container spacing={3} sx={{ 
          mt: 10, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'stretch' 
        }}>
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3} 
              lg={3}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              sx={{
                display: 'flex',
                maxWidth: '300px', 
                minWidth: '250px', 
              }}
            >
              <Card
                sx={{
                  width: '100%', 
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid white',
                  cursor: 'pointer',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': {
                    border: `1px solid ${feature.color}`,
                    boxShadow: 6,
                    transform: 'scale(1.04)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: 3,
                    py: 3,
                    height: '100%',
                  }}
                >
                  <Avatar sx={{ 
                    color: feature.color, 
                    mb: 2, 
                    bgcolor: 'white',
                    width: 50, 
                    height: 50 
                  }}>
                    {iconMap[feature.title]}
                  </Avatar>
                  <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" align="center">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default FeaturesSection;
