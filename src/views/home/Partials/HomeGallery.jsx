import { useState, useEffect } from 'react';
import { Tween, Reveal } from 'react-gsap';

function GalleryItem({ img1, img2, scrollSpeed, intervalTime }) {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlip((prev) => !prev);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [intervalTime]);

  return (
    <div
      data-scroll
      data-scroll-speed={scrollSpeed}
      className="home-gallery-container-images-item"
    >
      <img
        src={img1}
        alt={'gallery'}
        style={{ opacity: flip ? 0 : 1 }}
        draggable={false}
      />
      <img
        src={img2}
        alt={'gallery'}
        style={{ opacity: flip ? 1 : 0 }}
        draggable={false}
      />
    </div>
  );
}

const HomeGallery = () => {
  return (
    <section data-scroll data-scroll-section className={'home-gallery'}>
      <div className={'home-gallery-container'}>
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, filter: 'blur(10px)' }}
            to={{ opacity: 1, filter: 'blur(0px)' }}
            duration={0.9}
          >
            <h2 className={'text-120 regular black'}>Gallery</h2>
          </Tween>
        </Reveal>

        <div className={'home-gallery-container-images'}>
          <GalleryItem
            img1="/images/327977483_538827128037029_5188033903494680211_n.webp"
            img2="/images/274201633_631462288141554_4485344544273636200_n.webp"
            scrollSpeed="1"
            intervalTime={7500}
          />

          <GalleryItem
            img1="/images/338161418_738562034403007_2429770358654319643_n.webp"
            img2="/images/278570450_3224496677818472_1479680868294352441_n.webp"
            scrollSpeed="2"
            intervalTime={10827}
          />

          <GalleryItem
            img1="/images/340354603_185788494255597_310554228760720633_n.webp"
            img2="/images/293145603_1663170454043931_5235707113269236430_n.webp"
            scrollSpeed="-1"
            intervalTime={9513}
          />

          <GalleryItem
            img1="/images/346153444_2979279025539182_1606596882895243835_n.webp"
            img2="/images/293547227_835344427446644_3296906811321624122_n.webp"
            scrollSpeed="2"
            intervalTime={8769}
          />

          <GalleryItem
            img1="/images/343728710_1379881936124473_2178697753906007984_n.webp"
            img2="/images/294356621_417457437020233_6958538008808552314_n.webp"
            scrollSpeed="1"
            intervalTime={9103}
          />

          <GalleryItem
            img1="/images/327977483_538827128037029_5188033903494680211_n.webp"
            img2="/images/318976811_676263890675819_6492593473440765917_n.webp"
            scrollSpeed="-2"
            intervalTime={10057}
          />

          <GalleryItem
            img1="/images/334858856_6247794028615760_4106682381337072698_n.webp"
            img2="/images/345857778_780552046779772_1317941502679917400_n.jpg"
            scrollSpeed="-1"
            intervalTime={8043}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
