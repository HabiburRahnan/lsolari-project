import Container from "../../../Components/Container";

const Image = () => {
  return (
    <div>
      <Container>
        <div className="grid  grid-cols-1 md:grid-cols-12 ">
          <div className="row-span-3  ">
            <img src="https://i.ibb.co/pP8BNMq/25.png" alt="" />
          </div>

          <div className="row-span-4 ">
            <img src="https://i.ibb.co/Msy0ZHg/7.png" alt="" />
          </div>
          <div className="row-span-2 ">
            <img src="https://i.ibb.co/7jCv3th/24.png" alt="" />
          </div>
          <div className="row-span-3 ">
            <img src="https://i.ibb.co/j32hF9B/22.png" alt="" />
          </div>
        </div>
        <div>
          <div className="row-span-2 ">
            <img src="https://i.ibb.co/R0bff7B/23.png" alt="" />
          </div>
          <div className="row-span-2 ">
            <img src="https://i.ibb.co/xLcfN09/19.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Image;
