import React from "react";
import Portfolios from "../components/portfolios";
import { goldenHeart, newsBlog, SusanAugustt } from "../assets";
import Subtitles from "../components/subtitles";

const Portfolio = () => {
  return (
    <div className="bg-[#222222] text-white p-10 md:p-20">
      <div className="flex justify-center">
        <Subtitles text1="Featured" text2="Portfolio" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Portfolios
          projectLink="https://goldenheart.netlify.app/"
          image={goldenHeart}
          description="Golden Heart Website"
        />
        <Portfolios
          projectLink="https://tryblogapp.netlify.app/"
          image={newsBlog}
          description="News Blog MockUp"
        />
        <Portfolios
          projectLink="https://susanaugustt.netlify.app/"
          image={SusanAugustt}
          description="Musician's Website"
        />
      </div>
    </div>
  );
};

export default Portfolio;
