import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const Summary: React.FC = () => {
  return (
    <Box component="section" id="summary" sx={{ mb: 3,  
      backgroundColor: "#f0f0f0", // Dark grey background
      width: "70%", // Set width to 50% of the container
      mx: "auto", // Center horizontally
      mt: 0, // Margin top to center vertically
      borderRadius: 2, // Rounded corners
      padding: 3, // Padding inside the Box
      boxShadow: 3, // Add shadow for better visibility}}
      }}>
     <Typography variant="h5" sx={{fontWeight:"bold"}}>Summary</Typography>
     <TextField
        fullWidth
        multiline
        rows={6}
        defaultValue="Over 25 years of experience as an application and web software programmer, systems engineer and database expert of large information management systems. Expert in dynamic, responsive, web applications, frontend/backend application development, database design, distributed architectures, system integration, graphical interface design, Lead programmer and team lead responsibilities on all major projects, at many major companies. Project technologies implemented UNIX/C/C++/Python.  HTML5/CSS3/JSON/XML, PHP /Javascript/jQuery /React.js, OO/MVCs/CMSs, MySQL, Informix, Oracle, AWS//Internet Web /Cloud/Server/networking, and CI/CD architectures"
        InputProps={{ readOnly: true }}
      />
    </Box>
  );
};

export default Summary;
