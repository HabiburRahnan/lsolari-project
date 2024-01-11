import Banner from "../Banner/Banner";
import BannerCard from "../BannerCard/BannerCard";
import Hero from "../Hero/Hero";
import Notrehistoire from "../Notrehistoire/Notrehistoire";
import ProposSection from "../ProposSection/ProposSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerCard></BannerCard>
      <ProposSection></ProposSection>
      <Notrehistoire></Notrehistoire>
      <Hero></Hero>
    </div>
  );
};

export default Home;
