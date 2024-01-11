import Banner from "../Banner/Banner";
import BannerCard from "../BannerCard/BannerCard";
import Hero from "../Hero/Hero";
import Notrehistoire from "../Notrehistoire/Notrehistoire";
import ProposSection from "../ProposSection/ProposSection";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerCard></BannerCard>
      <ProposSection></ProposSection>
      <Notrehistoire></Notrehistoire>
      <Hero></Hero>
      <Services></Services>
    </div>
  );
};

export default Home;
