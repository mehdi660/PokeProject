import poke from "../assets/poke.png";
import "../style/nav.css";

const Navbar = () => {
  return (
    <nav>
      <img src={poke} alt="poke logo" width={70} />
    </nav>
  );
};

export default Navbar;
