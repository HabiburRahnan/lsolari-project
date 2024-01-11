const Banner = () => {
  return (
    <div>
      <div
        className="hero  bg-base-200 h-[400px] opacity-85"
        style={{
          
          backgroundImage: "url(https://i.ibb.co/ZNn56pL/hero.png)",
          boxShadow:""
          
         
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="">
            <img
              src="https://i.ibb.co/kBm78nf/Ellipse-3.png"
              alt=""
              className=" w-[340px] absolute ml-[360px] -mt-10"
            />
            <img
              src="https://i.ibb.co/3S6tbnf/Untitled-design-1-removebg-preview.png"
              className="-mb-[27px] rounded-lg shadow-2xl relative"
            />
          </div>

          <div className=" Whitespace-nowrap">
            <h1 className="text-5xl font-semibold text-white Whitespace-nowrap ">
              Votre partenaire en <br></br>
             
                <span className="text-[#9bc31c]">énergie</span> solaire <br></br>  pour le <span className="text-[#0091d7]">Benelux</span>
              
            </h1>

            <button className="btn bg-[#9bc31c] text-white rounded-2xl hover:bg-[#9bc31c]">Contactez nous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
