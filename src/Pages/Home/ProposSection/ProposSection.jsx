import { useEffect, useState } from "react";
import Container from "../../../Components/Container";

const ProposSection = () => {
  const [section, setSection] = useState([]);
  useEffect(() => {
    fetch("/Section.json")
      .then((res) => res.json())
      .then((data) => setSection(data));
  }, []);
  return (
    <div>
      <div className="mx-auto text-center lg:w-3/4 my-10">
        <p className="text-[#9bc31c] mb-2">À propos de nous</p>
        <p className="text-2xl font-bold uppercase py-5">
          Votre <span className="text-[#9bc31c] ">partenaire solaire</span> de
          confiance au Benelux.
        </p>
        <p>
          Depuis notre création, nous œuvrons avec passion pour démocratiser
          l'énergie solaire et rendre cette technologie accessible à tous. Nous
          croyons fermement en la puissance du soleil en tant que source
          d'énergie renouvelable, propre et rentable. Grâce à notre partenariat
          avec V-TAC, nous avons accès à des panneaux solaires de pointe qui ont
          fait leurs preuves dans le monde entier.
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ml-5 mt-5">
          {section?.map((item) => (
            <div
              key={item.id}
              className="md:p-6 p-5 max-w-[280px] border  my-10 shadow-lg  bg-white"
            >
              <div className="flex items-center justify-center">
                <img className="w-20" src={item.image} alt="" />
              </div>
              <div className="text-center">
                <div className="text-xl font-bold mt-4">{item.title}</div>
                <div>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProposSection;
