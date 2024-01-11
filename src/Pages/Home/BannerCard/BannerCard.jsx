/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Container from "../../../Components/Container";

import bcicone from "../../../assets/bcicone.png";
const BannerCard = () => {
  const [bannerCard, setBannerCard] = useState([]);
  useEffect(() => {
    fetch("/BannerCard.json")
      .then((res) => res.json())
      .then((data) => setBannerCard(data));
  }, []);
  console.log(bannerCard);
  return (
    <div>
      <Container>
        <div className="grid lg:grid-cols-10 ">
          <div className="col-span-4 bg-[#0A293B] text-white">
            <div className="p-10">
              <div className="">
                <img className="w-20" src={bcicone} alt="" />
              </div>
              <div>
                <div className=" font-bold ">
                  Notre partenaire de confiance pour des solutions solaires
                  innovantes et de haute qualité dans le Benelux.
                </div>
                <div className="text-xs">
                  Découvrez V-TAC, leader solaire du Benelux. Nos panneaux de
                  haute qualité, réputation mondiale et service innovant font de
                  nous votre choix préféré pour des solutions solaires fiables
                  et rentables. Passez à l'énergie solaire aujourd'hui et
                  profitez d'avantages durables !
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-5">
              {bannerCard?.map((item) => (
                <div
                  key={item?.id}
                  className="max-w-[280px] border   bg-white"
                >
                  <div className="flex items-center justify-center">
                    <img className="w-20" src={item?.image} alt="" />
                  </div>
                  <div className="">
                    <div className=" ">{item?.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerCard;
