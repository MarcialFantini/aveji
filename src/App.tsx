import "./App.css";
import AboutUs from "./components/AboutUs";
import { HeaderTop } from "./components/HeaderTop";
import Materials from "./components/Materials";
import { Navbar } from "./components/Navbar";
import OurWorks from "./components/OurWorks";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="containerApp">
        <HeaderTop></HeaderTop>
        <AboutUs></AboutUs>
      </div>
      <Materials></Materials>
      <OurWorks></OurWorks>
      <Reviews></Reviews>
    </>
  );
}

export default App;
