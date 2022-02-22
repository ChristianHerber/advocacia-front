import About from "../components/About"
import Contact from "../components/Contact"
import Copyright from "../components/Copyright"
import Map from "../components/Map"
import NavbarMenu from "../components/NavbarMenu"
import Office from "../components/Office"
import Presentation from "../components/Presentation"
import WhatsappButton from "../components/WhatsappButton"

export default function Home() {
  return (
    <>
      <NavbarMenu />
      <Presentation />
      <About />
      <Office />
      <Contact />
      <Map />
      <Copyright />
      <WhatsappButton />
    </>
  )
}