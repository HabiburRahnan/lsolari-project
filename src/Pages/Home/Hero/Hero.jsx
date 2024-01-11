import Container from "../../../Components/Container";

const Hero = () => {
  return (
    <div className="bg-[#9BC31C]">
      <Container>
        <div className="hero  ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/5jKVpvj/20.png"
              className="max-w-sm rounded-md shadow-white bg-white"
            />
            <div className="text-[#FFFFFF]">
              <h1 className="text-4xl font-semibold">
                Faites confiance à V-TAC pour des services solaires complets et
                professionnels
              </h1>
              <p className="py-3">
                Nous sommes là pour vous accompagner à chaque étape,
                garantissant une expérience fluide et un système solaire
                performant. Profitez de la tranquillité d'esprit en sachant que
                votre investissement solaire est entre de bonnes mains.
              </p>
              <div className="flex bg-white rounded-xl md:w-1/2">
                <h1 className=" font-semibold py-5 mx-3 text-black">Envie de discuter avec nous ?</h1>
                <button className="btn bg-[#9bc31c] text-white rounded-2xl hover:bg-[#9bc31c] my-auto">Contactez-nous</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
