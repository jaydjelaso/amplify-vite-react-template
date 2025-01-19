import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';


const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5', // Custom background for all accordions
          maxWidth: '800px',          // Global custom width
          border: '1px solid #ccc',   // Global custom border
          width: '100%',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0', // Custom background for summaries
          '&:hover': { backgroundColor: '#d0d0d0' }, // Hover effect
        },
      },
    },
  },
});
  
const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '550px', // Full viewport height
  backgroundColor: '#f0f0f0', // Optional background
  borderBottom: 1, pb: 3, mb: 0
});

export default function Skills() {
  const [expanded, setExpanded] = useState<string | false>(false); // State for tracking the expanded panel

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false); // Expand the clicked panel or close all
  };


  return (
   <CenteredContainer>
    <Box component="section" id="skills" sx={{ mb: 0 }}>
    <ThemeProvider theme={theme}>
      <Typography variant="h5" sx={{fontWeight:"bold"}}>Skills</Typography>
      
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight:"bold"}}>Web Technologies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>HTML5, CSS3, Javascript, jQuery, Mobile, React.js, Vite, MVCs, CMSs, CI/CD/DevOps, Phalcon-C PHP, Selenium, Django, Node.js</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight:"bold"}}>Operating Systems & Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>UNIX, Linux, NT, Microsoft Windows,	GitHub, Github Copilot, Docker, Kubernetes,	AWS Cloud, EC2, S3, Lambda, Amplify, Security and Networking Services</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight:"bold"}}>Programming Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>C/C++, Python, PHP, Javascript, Tyescript, JSON/JSON Schema, XML/XLST, Swagger, ksh, csh, sh, awk, perl, Digital Assembly, Database 4GL's, HTML5/CSS3, Webkit, Mozilla, Cloud APIs, Cisco CLI, GitHub, Visual Code
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight:"bold"}}>Databases and Software</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Informix, Oracle, Sybase, PostgreSQL, DB2, MySQL/Aurora, AWS RDS, Redshift, DynamoDB, Columnar, OpenStack, MS Access, ORM, Docker, Kubernetes, Selenium, Apache/Webservers, Github Copilot, AI
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight:"bold"}}>Networking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>LAN's, WAN's, DNS, Serial async, sync, OSPF, BGP, ISIS, MPLS, Cisco IOSXR, Cisco Nexus, Routers/Switches, TCP/IP, PPP/IP, UPD, UUCP, SLIP, PSDN, X25, SNA/LU6.2, SSL/TLS,	VPN's, Firewalls/Tunneling, Terminal Servers, LAT, RESTful, SOAP      
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{fontWeight:"bold"}}>CI/CD/DevOps/Testing/Performance Tuning/Debuggers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Jira, Bamboo, Confluence, Wrike, Slack, SalesForce, Docker, Stash, Jenkins Ansible, Groovy,	Selenium, PHPUnit, Python Unittest, Github, Google Webkit, Mozilla Firefox,	Google Canary, AWS DevOps, Virtualization, Clearcase, , rcs, sccs,	Visual Threads, dbx, kdbx, atom, third, pdb, pudb, Explain Query analysis,	indexing strategies, IO performance tuning, CPU Object modeling,	I/O-CPU bound, Symon, Purify, Atom, perfmeter, memtool, proctool,	HP OpenView, BMC Patrol/BEST</Typography>
        </AccordionDetails>
      </Accordion>
     </ThemeProvider>
    </Box>
    </CenteredContainer>  );
};


