import React from "react";

const About = () => {
  return (
    <div className="bg-[#00040F]">
      <section>
        <div className="container mx-auto">
          <div className="flex pb-20 pt-36 space-x-[500px] text-white items-center">
            <h1 className="font-semibold text-5xl">
              What people are saying about us
            </h1>
            <p className="text-xl">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>

          <div className="flex mt-20 mb-24 justify-between">
            <div className="py-[60px] px-10 rounded-3xl hover:bg-[#827c7cf3] ease-in duration-200">
              <img src="1.png" alt="" />
              <p className="text-white mt-10 mb-6 text-[18px] w-[290px]">
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className="flex items-center space-x-[16px]">
                <div>
                  <img className="w-12 h-12" src="Image.png" alt="" />
                </div>
                <div>
                  <h2 className="text-white text-xl">Herman Jensen</h2>
                  <p className="text-white text-base">Founder & Leader</p>
                </div>
              </div>
            </div>
            <div className="py-[60px] px-10 rounded-3xl hover:bg-[#827c7cf3] ease-in duration-200">
              <img src="1.png" alt="" />
              <p className="text-white mt-10 mb-6 text-[18px] w-[290px]">
                Money makes your life easier. If you're lucky to have it, you're
                lucky.
              </p>
              <div className="flex items-center space-x-[16px]">
                <div>
                  <img className="w-12 h-12" src="Image2.png" alt="" />
                </div>
                <div>
                  <h2 className="text-white text-xl">Steve Mark</h2>
                  <p className="text-white text-base">Founder & Leader</p>
                </div>
              </div>
            </div>
            <div className="py-[60px] px-10 rounded-3xl hover:bg-[#827c7cf3] ease-in duration-200">
              <img src="1.png" alt="" />
              <p className="text-white mt-10 mb-6 text-[18px] w-[290px]">
                It is usually people in the money business, finance, and
                international trade that are really rich.
              </p>
              <div className="flex items-center space-x-[16px]">
                <div>
                  <img className="w-12 h-12" src="Image3.png" alt="" />
                </div>
                <div>
                  <h2 className="text-white text-xl">Kenn Gallagher</h2>
                  <p className="text-white text-base">Founder & Leader</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between ">
            <img src="air.png" alt="" />
            <img src="Binance.png" alt="" />
            <img src="coiin.png" alt="" />
            <img src="drop.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
