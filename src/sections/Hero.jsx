import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col justify-center gap-10 w-full min-h-screen max-container"
    >
      <div className="relative flex flex-col justify-center items-start pt-28 w-full xl:w-2/5 max-xl:padding-x">
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-bold font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 xl:bg-white pr-10 xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mt-6 mb-14 sm:max-w-sm font-montserrat text-lg text-slate-gray leading-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex flex-wrap justify-start items-start gap-16 mt-20 w-full">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center bg-hero bg-primary bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="relative z-10 object-contain"
        />

        <div className="-bottom-[5%] sm:left-[10%] absolute flex gap-4 sm:gap-6 max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
