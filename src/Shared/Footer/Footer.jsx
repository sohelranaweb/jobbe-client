import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <img src="https://i.ibb.co/4mjgZk7/ass-cat-003-1.png" alt="" />
        <p>
          Explore Opportunities, Find Your Future: <br /> Jobs, Careers,
          Success, Employment, Listings
          <br />
          Providing reliable tech since 1992
        </p>
        <p>123 Jobbe, 1/24, New York, USA</p>
        <p>© 2023 Jobbe - All Rights Reserved</p>
      </aside>
      <nav>
        <header className="footer-title">Categories</header>
        <a className="link link-hover">On Site</a>
        <a className="link link-hover">Remote</a>
        <a className="link link-hover">Hybrid</a>
        <a className="link link-hover">Part Time</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <a className="link link-hover">
          <AiFillFacebook></AiFillFacebook>
        </a>
        <a className="link link-hover">
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </a>
        <a className="link link-hover">
          <AiFillYoutube></AiFillYoutube>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
