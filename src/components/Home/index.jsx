import CardInfo from "./Card-Info";
import Search from "./Search";

const Home = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <CardInfo title="CardInfo by Ken" />
      <Search title="Search by Ken" />
    </>
  );
};

export default Home;
