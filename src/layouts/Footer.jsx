const Footer = () => {
  return (
    <footer data-scroll data-scroll-section className={'footer'}>
      <aside className={'footer-container'}>
        <ul className={'footer-container-socials'}>
          <li className={'footer-container-socials-item instagram'}>
            <a
              href="https://www.instagram.com/okulusdigital/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={'images/instagram-noir.svg'} />
              <p className={'color-green text-30 regular'}>@balcokulus</p>
            </a>
          </li>
          <li className={'footer-container-socials-item instagram'}>
            <a
              href="https://twitter.com/OkulusL"
              target="_blank"
              rel="noreferrer"
            >
              <img src={'images/twitter-noir.svg'} />
              <p className={'color-green text-30 regular'}>@balcokulus</p>
            </a>
          </li>
        </ul>
      </aside>
    </footer>
  );
};

export default Footer;
