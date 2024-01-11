import Container from "../../../Components/Container";

const ServicesCard = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 ml-10">
          <div className=" col-span-4 ">
            <img src="https://i.ibb.co/1bqrs62/Group-47.png" alt="" />
          </div>
          <div className=" col-span-4 ">
            <img src="https://i.ibb.co/RyVZWfW/Group-46.png" alt="" />
          </div>
          <div className=" col-span-4 ">
            <img src="https://i.ibb.co/2sMnx50/Group-45.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesCard;
