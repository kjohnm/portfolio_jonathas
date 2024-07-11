import Slider from 'react-slick';
import { Box, Container, styled, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../../../customStyles/customStyles.css';

import ListaPaciente from '../../../../assets/images/ListaPaciente.jpeg';
import loginMigus from '../../../../assets/images/loginMigus.jpeg';
import MapaA from '../../../../assets/images/MapaA.jpeg';
import MapaCovid from '../../../../assets/images/MapaCovid.jpeg';
import pacientesPorDoenca from '../../../../assets/images/pacientesPorDoenca.jpeg';
import SentinelasDeRisco from '../../../../assets/images/SentinelasDeRisco.jpeg';

const Projects = () => {
  const StyledProjects = styled("section")(({ theme }) => ({
    display: "flex",
    padding: "100px 0",
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    justifyContent: "center",
  }));

  const StyledImg = styled("img")(() => ({
    display: "block",
    width: "40%",
    minWidth: "320px",
    borderRadius: "5px",
    margin: "0 auto",
    marginBottom: "15px",
  }));

  const SlideContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "400px",
    alignItems: "center",
    justifyContent: "center",
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "custom-dots",
  };

  const projectData = [
    {
      src: loginMigus,
      description: "Login screen for the MIGUS system, providing secure access to system."
    },
    {
      src: SentinelasDeRisco,
      description: "The registration of risk sentinel is a relevant feature to accompany not onlyrisk factors, but also to help identify the patient's degree of hypertension."
    },
    {
      src: MapaA,
      description: "Map Screen, where you can choose a disease and the system will return the geolocation of patients with that disease."
    },
    {
      src: MapaCovid,
      description: "Map screen when choosing to view patients with 'Covid'."
    },
    {
      src: ListaPaciente,
      description: "This is the patient list feature of the MIGUS system, Note that it is possible to search by name or by CNS. The system returns the list only when the user enters a character in the search."
    },
    {
      src: pacientesPorDoenca,
      description: "Visualization of patient data segmented by disease. By clicking on 'see more' it is possible to see the patient's complete information, edit their data, consult their geolocation and even re-evaluate their hypertension stage."
    },
  ];

  return (
    <StyledProjects id="projects">
      <Container maxWidth="md">
        <Typography variant="h2" color="primary.contrastText">
          My Projects - MIGUS
        </Typography>
        <Typography variant="body1" color="primary.contrastText" pt={3}>
                MIGUS, the friend of the health, it's a software aimed at helping healthcare teams
                monitor patients, including in a geolocated manner, and also assist track and 
                contain diseases. It was developed using mainly JavaScript, React Native, Expo + Expo
                Go, Firebase, among other technologies for testing and user validation. 
                Below are some of its main screens.
        </Typography>
        <Box my={4}>
          <Slider {...settings}>
            {projectData.map((project, index) => (
              <SlideContainer key={index} >
                <StyledImg src={project.src} alt={`Project Image ${index + 1}`} />
                <Typography variant="body1" color="primary.contrastText" paragraph>
                  {project.description}
                </Typography>
              </SlideContainer>
            ))}
          </Slider>
        </Box>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
