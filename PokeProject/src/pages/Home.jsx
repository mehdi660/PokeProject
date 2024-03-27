import Display from "../components/Display";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Filter />
      <Display />
    </div>
  );
};

export default Home;
