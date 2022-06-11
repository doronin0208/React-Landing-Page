import { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Introduction from "./components/introduction";
import WankaBabyShiba from "./components/wankababysiba";
import LaunchPad from "./components/launchpad";
import PlayToEarn from "./components/playtoearn";
import Tokenomics from "./components/tokenomics";
import Reflection from "./components/reflection";
import OurPartner from "./components/ourpartner";
import RoadMap from "./components/roadmap";
import Footer from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState(JsonData);
  
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <div>
      <Navigation />
      <Header/>
      <Introduction/>
      <WankaBabyShiba/>
      <LaunchPad/>
      <PlayToEarn/>
      <Tokenomics/>
      <Reflection/>
      <OurPartner/>
      <RoadMap/>
      <Footer/>
    </div>
  );
};

export default App;
