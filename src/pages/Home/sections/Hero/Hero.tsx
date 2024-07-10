import { Button, Container, Grid, styled, Typography } from "@mui/material"
import PerfilPicture from "../../../../assets/images/fotinha.png"
import DownloadIcon from '@mui/icons-material/Download';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Hero = () => {

  const StyledHero = styled("div")(()=> ({
    backgroundColor: "black",
  }))

  const StyledImg = styled("img")(()=> ({
    width: "100%",
    borderRadius: "50%",
  }))

  return (
    <>
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StyledImg src = {PerfilPicture} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary" variant="h1"> Jonathas Santos </Typography>
            <Typography color="primary" variant="h2"> Computer Engineer </Typography>
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <DownloadIcon/>
                  Download Resume
                </Button>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <ContactPageIcon/>
                  Contact me
                </Button>
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
