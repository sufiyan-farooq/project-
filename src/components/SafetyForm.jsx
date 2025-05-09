import React from 'react';
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
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff', 
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center', 
}));

const SafetyForms = () => {
  const features = [
    { label: 'Sign In / Sign Out', icon: AssignmentIcon, color: '#00a859'},
    { label: 'Company Induction', icon: BusinessIcon ,color: '#0073ce'},
    { label: 'Toolbox Meeting', icon: BuildIcon, color: '#00a859'},
    { label: 'Daily Hazard', icon: WarningIcon , color: '#0073ce' },

    { label: 'Incident Report', icon: ReportProblemIcon , color: '#00a859'},
    { label: 'Task Card', icon: TaskAltIcon,color: '#0073ce' },
    { label: 'Site Inspection', icon: VisibilityIcon ,color: '#00a859' },
    { label: 'and more...', icon: MoreHorizIcon , color: '#0073ce' },
  ];

  return (
    <div style={{backgroundColor: '#f9f9f9'}} className=" py-8">
      <Container maxWidth="lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
          Safety Forms Available
        </h1>
        <div className="p-8 bg-white mt-10"> 
          <Grid container spacing={2} sx={{display:"flex",justifyContent:"space-around"}}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ padding:"15px" , marginLeft:"10px"}}>
               
               <feature.icon sx={{ fontSize: 30, color: feature.color, mb: 1 }} />
               <span className="text-lg font-medium text-gray-700 ml-6">{feature.label}</span>
           
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default SafetyForms;
