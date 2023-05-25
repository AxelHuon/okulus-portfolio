const HomeContact = () => {
  return (
    <section
      id={'contact'}
      data-scroll
      data-scroll-section
      className={'home-contact'}
    >
      <div className={'home-contact-container'}>
        <div className={'home-contact-container-image'}>
          <img
            src={'images/337911861_575479647880698_1862961635665488837_n.webp'}
          />
        </div>
        <div className={'home-contact-container-content'}>
          <h3 className={'regular text-43'}>
            Let's create something unique together
          </h3>

          <form method={'POST'}>
            <div className={'home-contact-form-input'}>
              <label className={'paragraph'} htmlFor={'name'}>
                Name
              </label>
              <div className="home-contact-form-input-container">
                <input
                  className={'paragraph'}
                  type={'text'}
                  name={'name'}
                  placeholder={'Name'}
                  required
                />
              </div>
            </div>

            <div className={'home-contact-form-input'}>
              <label className={'paragraph'} htmlFor={'email'}>
                Email
              </label>
              <div className="home-contact-form-input-container">
                <input
                  className={'paragraph'}
                  type={'email'}
                  name={'email'}
                  placeholder={'Email'}
                  required
                />
              </div>
            </div>

            <div className={'home-contact-form-input'}>
              <label className={'paragraph'} htmlFor={'Subject'}>
                Subject
              </label>

              <div className="home-contact-form-input-container">
                <input
                  className={'paragraph'}
                  type={'text'}
                  name={'subject'}
                  placeholder={'Subject'}
                  required
                />
              </div>
            </div>

            <div className={'home-contact-form-input'}>
              <label className={'paragraph'} htmlFor={'message'}>
                Message
              </label>
              <div className="home-contact-form-input-container">
                <textarea
                  className={'paragraph'}
                  name={'message'}
                  placeholder={'Message'}
                  required
                />
              </div>
            </div>

            <div className={'home-contact-form-submit'}>
              <button className={'paragraph'} type={'submit'}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
