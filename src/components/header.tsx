
import React from 'react';
import { Box, Typography, Grid2 } from '@mui/material';
import portpic from '../assets/jayportpic.jpg';
import ethyinyang from '../assets/ethyinyang.gif';
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Header: React.FC = () => {
  return (
    <Box component="header" sx={{ borderBottom: 1, borderColor: 'divider', pb: 3, mb: 0 }}>
      <Grid2 container spacing={2} // Adds spacing between children
        sx={{
           mt: 4,
           backgroundColor: "#f0f0f0",
           padding: 2,
          }}>
        <Grid2 xs={4} display="flex" flexDirection="column" >
          <Box component="img"
             sx={{
             width: '100%', // Full width of the container
             maxWidth: 400, // Maximum width of 400px
             height: 'auto', // Maintain aspect ratio
             borderRadius: '8px', // Rounded corners
             boxShadow: 3, // MUI's shadow system
            }}
            alt="Portfolio Image"
            src={portpic}
            >
          </Box>
        </Grid2>
        <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center" sx={{ml:15}}>
            <Typography variant="h4" sx={{mb:4, fontWeight:"bold", textDecoration: "underline"}} >Contact Information</Typography>
          <Typography variant="h5" sx={{fontWeight:"bold"}}>Jay Jelaso</Typography>
          <Typography variant="h5"><Link href="mailto:jay.jelaso@gmail.com" style={{ color: "#1976d2" }}>jay.jelaso@gmail.com</Link></Typography>
          <Typography variant="h5">(434) 425 9400</Typography>
          <Typography variant="h5">Kalamazoo, MI 49008</Typography>
          <Typography variant="h5"><Link href="https://www.jayjelaso.com"  style={{ color: "#1976d2" }}>www.jayjelaso.com</Link></Typography>
          <Typography variant="h5"><Link href="https:///www.linkedin.com/in/jay-jelaso-b0075b13a/" target="_blank" rel="noopener noreferrer">
                    Jay's LinkedIN
                </Link>
          </Typography>
          </Grid2>
        <Grid2 item xs={3} display="flex" flexDirection="column" alignItems="center"  sx={{ml:10}}>
          <Typography variant="h4" align="right" sx={{mb:0, fontWeight:"bold", textDecoration: "underline"}}>Professional Software Developer</Typography>
          <Grid2
      container
      spacing={2} // Adds spacing between the cards
      sx={{
        mt: 4, // Top margin
        justifyContent: "center", // Centers the cards horizontally
      }}
    >
      {/* Card 1 */}
      <Grid2 xs={12} sm={6} md={4}>
        <Card>
          {/* Image */}
          <CardMedia
            component="img"
            height="5%"
            width="5%"
            image={ethyinyang}
            alt="Crypto Arbitrage"
          />
          {/* Content */}
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Crypto Arbitrage Bot
            </Typography>
            <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 0, display: "inline-block", fontWeight: "bold" }}
            >
              Learn More
            </Link>
          </CardContent>
        </Card>
      </Grid2>

      {/* Card 2   */} 
       {/* <Grid2 xs={12} sm={6} md={4}>  */}
        {/* <Card> */}
          {/* Image */}
          {/* <CardMedia */}
            {/* component="img" */}
            {/* height="200" */}
            {/* image="https://via.placeholder.com/300" */}
            {/* alt="Example Image 2" */}
          {/* /> */}
          {/* Content */}
          {/* <CardContent> */}
            {/* <Typography variant="h6" gutterBottom>
              Card Title 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a description for the second card. It also provides context for the image
              above.
            </Typography>
            <Link
              href="https://example.com"
              target="_blank
              rel="noopener noreferrer"
              sx={{ mt: 2, display: "inline-block", fontWeight: "bold" }}
            >
              Learn More
            </Link>
          </CardContent>
        </Card>
      </Grid2>*/}
    </Grid2>
       
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default Header;