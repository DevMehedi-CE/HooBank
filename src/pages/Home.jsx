import React from "react";

const Home = () => {
  return (
    <div className="bg-[#00040F]">
      <section>
        <div className="flex justify-between  items-center">
          <div className="relative ml-44 pt-[105px]">
            <img src="discount.png" alt="Offer" />
            <img
              className="absolute right-0 top-[80px]"
              src="get.png"
              alt="get"
            />
            <h1 className="text-white text-[72px] font-semibold font-mono mt-[12px]">
              The Next <br />
              <span className="text-[#22E9F0]">Generation</span> <br />
              Payment Method.
            </h1>
            <p className="text-white text-[18px] w-[483px] mt-[40px]">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className=" pt-[105px]">
            <img className="absolute animate-bounce" src="Vector.png" alt="" />
            <img
              className="absolute bottom-[280px] right-[220px] animate-bounce"
              src="Vector (1).png"
              alt=""
            />
            <img
              className="relative animate-pulse"
              src="robotcard.png"
              alt=""
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center space-x-[28px]">
              <h1 className="text-[40px] font-semibold text-white">3800+</h1>
              <p className="text-xl text-[#22E9F0] mt-2">User Active</p>
              {/* <!-- <span class="h-6 w-1 bg-white"></span> --> */}
            </div>
            <div className="flex items-center space-x-[28px]">
              <h1 className="text-[40px] font-semibold text-white">230+</h1>
              <p className="text-xl text-[#22E9F0] mt-2">TRUSTED BY COMPANY</p>
              {/* <!-- <span class="h-6 w-1 bg-white ml-[50px]"></span> --> */}
            </div>
            <div className="flex items-center space-x-[28px]">
              <h1 className="text-[40px] font-semibold text-white">230M+</h1>
              <p className="text-xl text-[#22E9F0] mt-2">TRANSACTION</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
