import HomeAbout from './Partials/HomeAbout.jsx';
import HomeGallery from './Partials/HomeGallery.jsx';
import HomeHero from './Partials/HomeHero.jsx';
import HomeContact from './Partials/HomeContact.jsx';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeGallery />
      <HomeContact />
    </>
  );
};

export default Home;
