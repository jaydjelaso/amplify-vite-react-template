import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const Hobbies: React.FC = () => {
  
      return (
        <Box component="section" id="hobbies" sx={{ mb: 3,  
          backgroundColor: "#f0f0f0", // Dark grey background
          width: "70%", // Set width to 50% of the container
          mx: "auto", // Center horizontally
          mt: 4, // Margin top to center vertically
          borderRadius: 2, // Rounded corners
          padding: 3, // Padding inside the Box
          boxShadow: 3, // Add shadow for better visibility}}
          }}>
         <Typography variant="h5" sx={{fontWeight:"bold"}}>Hobbies</Typography>
         <TextField
            fullWidth
            multiline
            defaultValue="Chess, Tai Chi Sword, Bass Guitar"
            rows={1}
            InputProps={{ readOnly: true }}
          />
        </Box>
      );
  
};

export default Hobbies;