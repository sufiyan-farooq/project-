import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import BusinessIcon from '@mui/icons-material/Business';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BuildIcon from '@mui/icons-material/Build';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WarningIcon from '@mui/icons-material/Warning';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Container, Box, Typography } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 16,
  boxShadow: 'none', // Shadow hata diya
  border: 'none',    // Border hata diya
  cursor: 'default', // Hover effect hata diya
}));

const SafetyForms = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-sine',
      once: true,
    });
  }, []);

  const features = [
    { label: 'Sign In / Sign Out', icon: AssignmentIcon, color: '#00a859' },
    { label: 'Company Induction', icon: BusinessIcon, color: '#0073ce' },
    { label: 'Toolbox Meeting', icon: BuildIcon, color: '#00a859' },
    { label: 'Daily Hazard', icon: WarningIcon, color: '#0073ce' },
    { label: 'Incident Report', icon: ReportProblemIcon, color: '#00a859' },
    { label: 'Task Card', icon: TaskAltIcon, color: '#0073ce' },
    { label: 'Site Inspection', icon: VisibilityIcon, color: '#00a859' },
    { label: 'and more...', icon: MoreHorizIcon, color: '#0073ce' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
      <Container maxWidth="lg">
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6"
          data-aos="fade-up"
        >
          Safety Forms Available
        </h1>
        <Box sx={{ p: 4, backgroundColor: 'white', mt: 10, borderRadius: 4 }}>
          <Grid container spacing={3} justifyContent="center">
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Item>
                  <feature.icon sx={{ fontSize: 40, color: feature.color, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    {feature.label}
                  </Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SafetyForms;
