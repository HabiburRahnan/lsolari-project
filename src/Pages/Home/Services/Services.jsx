import Container from "../../../Components/Container";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/fCgvsjC/bg.png)",
      }}
    >
      <Container>
        <div className="py-10">
          <div className=" grid md:grid-cols-12 ">
            <div className="col-span-2">
              <img
                src="https://i.ibb.co/VqNThvK/2.png"
                className=" shadow-2xl "
              />
              <img
                src="https://i.ibb.co/RS4dXmG/16.png"
                className=" shadow-2xl"
              />
            </div>
            <img
              src="https://i.ibb.co/jMstj89/18.png"
              className=" shadow-2xl col-span-4"
            />

            <div className="col-span-6 my-auto">
              <div className="ml-10 ">
                <p className="text-[#9bc31c] mb-2">Services</p>
                <p className="text-3xl font-semibold uppercase py-2 Whitespace-nowrap">
                  Services complets pour votre <br></br>
                  <span className="text-[#9bc31c]">système solaire</span>
                  V-TAC
                </p>
                <p>
                  Chez V-TAC, nous allons au-delà de la livraison de panneaux
                  solaires de haute qualité en offrant des services complets
                  pour une expérience sans faille. Notre équipe d'experts assure
                  une installation précise, une maintenance régulière et un
                  service client dédié, garantissant des performances optimales
                  et une tranquillité d'esprit tout au long de votre parcours
                  solaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ServicesCard></ServicesCard>
    </div>
  );
};

export default Services;
