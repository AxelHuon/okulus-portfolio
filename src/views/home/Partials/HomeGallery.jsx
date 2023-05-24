const HomeGallery = () => {
  return (
    <section data-scroll data-scroll-section className={'home-gallery'}>
      <div className={'home-gallery-container'}>
        <h2 className={'text-120 regular black'}>Gallery</h2>

        <div className={'home-gallery-container-images'}>
          <div
            data-scroll
            data-scroll-speed="1"
            className={'home-gallery-container-images-item'}
          >
            <img
              src={
                '/images/327977483_538827128037029_5188033903494680211_n.webp'
              }
              alt={'gallery'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="2"
            className={'home-gallery-container-images-item'}
          >
            <img
              src={
                '/images/338161418_738562034403007_2429770358654319643_n.webp'
              }
              alt={'gallery'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="-1"
            className={'home-gallery-container-images-item'}
          >
            <img
              src={
                '/images/340354603_185788494255597_310554228760720633_n.webp'
              }
              alt={'gallery'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="2"
            className={'home-gallery-container-images-item'}
          >
            <img
              src={
                '/images/346153444_2979279025539182_1606596882895243835_n.webp'
              }
              alt={'gallery'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="1"
            className={'home-gallery-container-images-item'}
          >
            <img
              src={
                '/images/343728710_1379881936124473_2178697753906007984_n.webp'
              }
              alt={'gallery'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="-2"
            className={'home-gallery-container-images-item'}
          >
            <img
              src={
                '/images/327977483_538827128037029_5188033903494680211_n.webp'
              }
              alt={'gallery'}
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="-1"
            className={'home-gallery-container-images-item'}
          >
            <img
              src={
                '/images/338161418_738562034403007_2429770358654319643_n.webp'
              }
              alt={'gallery'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
