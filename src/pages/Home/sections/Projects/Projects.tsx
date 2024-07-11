import { Box, Container, styled, Typography } from "@mui/material";

const Projects = () => {
  const StyledProjects = styled("section")(({ theme }) => ({
    padding: "100px 0",
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  }));

  return (
    <StyledProjects id="projects">
      <Container maxWidth="md">
        <Typography variant="h2" color="primary.contrastText">
          My Projects
        </Typography>
        <Box my={4}>
          <StyledImg src="" alt="Project Image 1" />
          <Typography variant="body1" color="primary.contrastText" paragraph>
            This project is the MIGUS system, software aimed at helping healthcare teams
            monitor patients, including in a geolocated manner, and also assist track and 
            contain diseases. It was developed using JavaScript, React Native, Expo + Expo
            Go, Firebase, among other technologies for testing and user validation.
          </Typography>
          <StyledImg src="" alt="Project Image 2" />
          <Typography variant="body1" color="primary.contrastText" paragraph>
            ...
          </Typography>
        </Box>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
