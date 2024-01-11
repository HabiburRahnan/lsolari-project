import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Container from "../../../Components/Container";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div
      className="bg-slate-800 "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/sF9hs4K/411181216-1792643777816410-1731403305942777594-n.png)",
      }}
    >
      <Container>
        <div className="footer p-10   text-white">
          <nav>
            <header className="footer-title">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </header>
            <a className="link link-hover">Découvrez V-TAC, le leader des </a>
            <a className="link link-hover">panneaux solaires performants</a>
            <a className="link link-hover">pour des solutions énergétiques</a>
            <a className="link link-hover">fiables et économiques.</a>
          </nav>
          <nav>
            <header className="footer-title">Liens rapides</header>
            <a className="link link-hover">Produits</a>
            <a className="link link-hover">Excellence</a>
            <a className="link link-hover">Nos services</a>
            <a className="link link-hover">Advantages</a>
            <a className="link link-hover">À propos de nous</a>
          </nav>
          <nav>
            <header className="footer-title">À propos de nous</header>
            <a className="link link-hover">Notre histoire</a>
            <a className="link link-hover">Qualité et durabilité</a>
            <a className="link link-hover">Service client exceptionnel</a>
            <a className="link link-hover">Devis sur mesure</a>
          </nav>
          <nav>
            <header className="footer-title">S'abonner</header>
            <a className="link link-hover">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
            </a>
            <a className="link link-hover ">
              <button className="btn bg-[#9bc31c] text-white rounded-xl hover:bg-[#9bc31c]  w-full max-w-xs">
                S'abonner
              </button>
            </a>
            <a className="link link-hover">
              Recevez les dernières mises à jour
            </a>
            <a className="link link-hover">par e-mail. Vous pouvez vous</a>
            <a className="link link-hover">désabonner à tout moment</a>
          </nav>
        </div>
      </Container>
      <div className="bg-black mt-0">
        <Container>
          <div className="footer px-10 py-4 border-t  text-slate-600 border-base-300">
            <p>© Elsolari {year} | All Rights Reserved</p>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="grid grid-flow-col gap-4">
                <p>Privacy | Terms </p>
              </div>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
