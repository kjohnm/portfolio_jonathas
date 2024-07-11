import { Box, Container, Grid, styled, Typography } from "@mui/material"
import PerfilPicture from "../../../../assets/images/fotinha.png"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme })=> ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Centraliza horizontalmente
  }))

  const StyledImg = styled("img")(({ theme })=> ({
    width: "70%",
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
              <Box position="absolute" width={"100%"}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src = {PerfilPicture} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" align="center"> Jonathas Santos </Typography> {/* Alinhar o texto centralmente */}
            <Typography color="primary.contrastText" variant="h2" align="center"> Computer Engineer </Typography> {/* Alinhar o texto centralmente */}
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
    </>
  )
}

export default Hero
