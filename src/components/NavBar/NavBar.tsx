import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem component="a" href="#about">About</MenuItem>
                    <MenuItem component="a" href="#projects">Projects</MenuItem>
                    <MenuItem component="a" href="#contact">Contact</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar
