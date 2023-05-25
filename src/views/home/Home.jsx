import HomeAbout from './Partials/HomeAbout.jsx';
import HomeGallery from './Partials/HomeGallery.jsx';
import HomeHero from './Partials/HomeHero.jsx';
import HomeContact from './Partials/HomeContact.jsx';
import HomeForeverVacation from "./Partials/HomeForeverVacation.jsx";
import Footer from "../../layouts/Footer.jsx";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeGallery />
       <HomeForeverVacation/>
      <HomeContact />
    </>
  );
};

export default Home;
