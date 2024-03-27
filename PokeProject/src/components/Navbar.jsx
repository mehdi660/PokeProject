import poke from "../assets/poke.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <img src={poke} alt="poke logo" width={100} />
      </ul>
    </nav>
  );
};

export default Navbar;
