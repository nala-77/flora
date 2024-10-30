import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

import logo from "./../public/logo.png";
import headerPic from "./../public/building.svg";
import location from "./../public/location.svg";
import price from "./../public/dollar-circle.svg";
import house from "./../public/house.svg";
import CardsSection from "./components/CardsSection/CardsSection";
import BackgroundSection from "./components/BackgroundSection/BackgroundSection";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import Footer from "./components/Footer/Footer";
import { FooterDataOne, FooterDataThree, FooterDataTwo } from "./Data";
import Estate from "./components/Estate/Estate";
function App() {
  const Rectangle = "./../../../public/Rectangle.svg"
  const links = [
    {
      to: "home",
      link: "Home",
    },
    {
      to: "about",
      link: "About",
    },
    {
      to: "service",
      link: "Service",
    },
    {
      to: "newProperty",
      link: "New Property",
    },
    {
      to: "contact",
      link: "Contact",
    },
  ];

  const details = [
    {
      image: location,
      title: "location",
      info: "Ahmedabad, India",
    },
    {
      image: price,
      title: "Price",
      info: "$1000 - $10,000",
    },
    {
      image: house,
      title: "Type of Property",
      info: "Apartment",
    },
  ];


  return (
    <>
      <Navbar image={logo} links={links} btn="Login" />
      <Header
        title="Discover a place you will love to live"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.
   "
        details={details}
        image={headerPic}
      />
      <CardsSection />

      <BackgroundSection image="./../../../public/Rectangle.svg" title="Find Dream Home" desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>
      <TrendingSection />
      <Estate />
      <Footer logo={logo} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque." 
      dataOne={FooterDataOne} dataTwo={FooterDataTwo} dataThree={FooterDataThree}
      />
    </>
  );
}

export default App;
