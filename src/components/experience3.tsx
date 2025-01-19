import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experience: React.FC = () => {
  return (
    <Box component="section" id="experience" sx={{ mb: 3 }}>
      <Typography variant="h6">Experience</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Python Developer - EMF Technologies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Developed blockchain authorization prototypes using Web3 technologies, Python/Django, and React.js. Hosted on AWS with CI/CD pipelines.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Web Systems Programmer - Cisco Networks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Created SDK modules and APIs for automated testing of Cisco devices. Integrated backend Python modules with React.js/Node.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Experience;
