import { Container, styled, Typography, Link, Button, Box, Grid } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Contact = () => {

  const StyledContact = styled("section")(() => ({
    padding: "100px 0",
    backgroundColor: "#DFDFDF",
    textAlign: "center",
  }));

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: "kjonathas@live.com",
      link: null,
    },
    {
      icon: <PhoneIcon />,
      label: "+55 79 99628-6891",
      link: null,
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jonathas-ec/",
    },
    {
      icon: <PictureAsPdfIcon />,
      label: "Curriculum",
      link: "https://drive.google.com/file/d/1V1s2ORfGP9rOoK3CAH1G16QcxvoIaQs0/view?usp=sharing",
    },
  ];

  return (
    <StyledContact id="contact">
      <Container maxWidth="md">
        <Typography variant="h2" color="primary" gutterBottom>
          Contact and Resume
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {contactInfo.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box display="flex" alignItems="center" justifyContent="center">
                {item.link ? (
                 <Button
                 variant="contained"
                 startIcon={item.icon}
                 component={Link}
                 href={item.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 fullWidth
                 style={{
                     backgroundColor: "#333",
                     color: '#FFF',
                     fontSize: "14px",               
                 }}
             >
                 {item.label}
             </Button>
                ) : (
                  <>
                    {item.icon}
                    <Typography variant="body1" color="textPrimary" ml={1}>
                      {item.label}
                    </Typography>
                  </>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledContact>
  );
}

export default Contact;
