import { Container, styled, Typography } from "@mui/material";

const Contact = () => {

  const StyledContact = styled("section")(() => ({
    padding: "100px 0",
    backgroundColor: "#DFDFDF",
    textAlign: "center",
  }));
  return (
    <StyledContact id="contact">
      <Container maxWidth="md">
        <Typography variant="h2" color="primary">
          Contact and Resume
        </Typography>
      </Container>
    </StyledContact>
  );
}

export default Contact;