import { Box, Container, styled, Typography } from "@mui/material";

const About = () => {
  const StyledAbout = styled("section")(() => ({
    padding: "100px 0",
    backgroundColor: "#DFDFDF",
    textAlign: "center",
  }));

  return (
    <StyledAbout id="about">
      <Container maxWidth="md">
        <Typography variant="h2" color="primary">
          About Me
        </Typography>
        <Typography variant="body1" color="theme.palette.primary.contrastText" paragraph>
          I'm 28 years old, in May 2024, I graduated in Computer Engineering
          from the Federal University of Sergipe (UFS). Over approximately 18 months,
          I developed, from requirements gathering and scope changes, to product delivery, 
          the MIGUS system, my highlight project, allowing me to gain significant 
          experience in different technologies and languages, primarily in JavaScript, 
          React, React Native, Expo, Expo Go, and Firebase. This project also
          earned me invitations to start a startup or pursue a master's scholarship to
          continue improving the system.
        </Typography>
        <Typography variant="body1" color="theme.palette.primary.contrastText" paragraph>
          I have been focusing on improving my development of efficient and intuitive 
          applications always thinking about improving user experience and satisfaction. Furthermore, I am 
          always eager to learn new technologies and improve my skills. 
          I am convinced that, with my effort and dedication, I can be a positive 
          difference in any team I join.
        </Typography>
        <Box my={4}>
          <Typography variant="h4" color="primary">
            Skills
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            Soft Skills
          </Typography>
          <Typography variant="body1" color="theme.palette.primary.contrastText" paragraph>
            - Good communication and organization;<br />
            - Teamwork skills;<br />
            - Ease and availability to learn new technologies;<br />
            - Proactivity;<br />
            - Dedication and focus for achieving good results.
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            Hard Skills
          </Typography>
          <Typography variant="body1" color="theme.palette.primary.contrastText" paragraph>
            - Programming languages (Java, Python, C, C++, JavaScript);<br />
            - Technologies and Frameworks (React, React Native, Expo Go, Firebase, Angular, Spring Boot);<br />
            - HTML and CSS;<br />
            - Agile methodologies;<br />
            - Version control: GitHub and GitKraken;<br />
            - Databases.
          </Typography>
        </Box>
      </Container>
    </StyledAbout>
  );
};

export default About;
