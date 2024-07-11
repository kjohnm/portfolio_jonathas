import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
