import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const navItems = ['Sign In', 'Register', 'About', 'Contact']

function App() {
  return (
    <>
      <Navbar links={navItems} />
      <Hero />
      <Main />
      <Footer links={navItems} />
    </>
  )
}

export default App