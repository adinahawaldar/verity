import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import MisinformationCases from './Components/MisinformationCases';
import Verification from "./Components/Verification";
import Cases from './Components/Cases';
import UseCases from './Components/UseCases';
import Resources from './Components/Resources'
import Categories from "./Components/Categories";
import Footer from './Components/Footer';
export default function App() {
  return (
    <>

    <Navbar/>
    <Hero/>
    <About/>
    <MisinformationCases/>
    <Verification/>
    {/* <Cases/> */}
    <UseCases/>
    <Resources/>
    <Categories/>
    <Footer/>
    </>
  )
}
