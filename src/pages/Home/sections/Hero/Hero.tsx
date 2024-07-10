import { Box, Container, Grid, styled, Typography } from "@mui/material"
import PerfilPicture from "../../../../assets/images/fotinha.png"
import DownloadIcon from '@mui/icons-material/Download';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme })=> ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }))

  const StyledImg = styled("img")(({ theme })=> ({
    width: "80%",
    borderRadius: "50%",
    border: "1px solid",
    borderColor: theme.palette.primary.contrastText,
  }))

  return (
    <>
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"125%"} top={-110} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src = {PerfilPicture} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1"> Jonathas Santos </Typography>
            <Typography color="primary.contrastText" variant="h2"> Computer Engineer </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={5} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon/>
                    <Typography>Download Resume</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={5} display="flex" justifyContent="center">
                <StyledButton>
                  <ContactPageIcon/>
                    <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </StyledHero>
    </>
  )
}

export default Hero
