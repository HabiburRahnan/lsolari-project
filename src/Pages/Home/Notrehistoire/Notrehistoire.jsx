import Container from "../../../Components/Container";
import Image from "./Image";

const Notrehistoire = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/h2sMp15/bgimge.png)",
      }}
    >
      <Container>
        <div className=" my-10">
          <p className="text-[#9bc31c] mb-2">Notre histoire</p>
          <p className="text-2xl font-bold uppercase py-5">
            Rendre l'énergie propre accessible à tousT Grâce à des partenariats
            innovants Votre
            <span className="text-[#9bc31c] "></span>
          </p>
          <p>
            Depuis notre création, nous œuvrons avec passion pour démocratiser
            l'énergie solaire et rendre cette technologie accessible à tous.
            Nous croyons fermement en la puissance du soleil en tant que source
            d'énergie renouvelable, propre et rentable. Grâce à notre
            partenariat avec V-TAC, nous avons accès à des panneaux solaires de
            pointe qui ont fait leurs preuves à l'échelle mondiale.
          </p>
        </div>
      </Container>
      <Image></Image>
    </div>
  );
};

export default Notrehistoire;
