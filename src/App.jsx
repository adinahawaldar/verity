import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import MisinformationCases from './Components/MisinformationCases';
import Verification from "./Components/Verification";
import UseCases from './Components/UseCases';
// import Resources from './Components/Resources';
import Categories from "./Components/Categories";
import Footer from './Components/Footer';
import Faq from './Components/Faq';
export default function App() {
  return (
    <>

    <Navbar/>
    <Hero/>
    <About/>
        <Verification/>

    <MisinformationCases/>
    {/* <Cases/> */}
    <UseCases/>
    {/* <Resources/> */}
    <Categories/>
    <Faq/>
    <Footer/>
    </>
  )
}
