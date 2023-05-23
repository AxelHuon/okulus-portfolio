import Router from './router/Router';

import './assets/style/main.css';
import { useState, useEffect } from 'react';

function App() {
  const images = [
    './images/327977483_538827128037029_5188033903494680211_n.webp',
    './images/338161418_738562034403007_2429770358654319643_n.webp',
    './images/340354603_185788494255597_310554228760720633_n.webp',
    './images/346153444_2979279025539182_1606596882895243835_n.webp',
    './images/343728710_1379881936124473_2178697753906007984_n.webp',
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(images[imageIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeoutIds = [];
    let delay = 2000;
    for (let i = 1; i < images.length; i++) {
      delay /= 2;
      const timeoutId = setTimeout(() => {
        setImageIndex(i);
        setImageSrc(images[i]);
      }, delay);
      timeoutIds.push(timeoutId);
    }

    return () => timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  }, []);

  return (
    <>
      <div className={'loader'}>
        <img src={imageSrc} alt="loader" />
      </div>
      <div className="page">
        <Router />
      </div>
    </>
  );
}

export default App;
