import React from "react";

const Feature = () => {
  return (
    <div className="bg-[#00040F]">
      <section>
        <div class="container mx-auto">
          <div class=" pt-28 flex space-x-[278px]">
            <div class="w-[610px]">
              <h1 class="font-mono text-[48px] font-semibold text-white">
                You do the business, we’ll handle the money.
              </h1>
              <p class="font-serif text-[18px] text-white mt-[24px] mb-[48px] pr-[120px]">
                With the right credit card, you can improve your financial life
                by building credit, earning rewards and saving money. But with
                hundreds of credit cards on the market.
              </p>
              <button class="bg-[#22E9F0] py-[19px] px-[33px] rounded-lg text-xl font-mono">
                Get Started
              </button>
            </div>
            <div>
              <div class="flex items-center space-x-5 mb-8 font-mono text-[18px] hover:bg-[#524747] p-5 rounded-lg ease-in duration-1000">
                <div class="img">
                  <img class="w-16 h-16" src="star.png" alt="star" />
                </div>
                <div>
                  <h1 class="text-white font-semibold">Rewards</h1>
                  <p class="text-white w-[450px]">
                    The best credit cards offer some tantalizing combinations of
                    promotions and prizes
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5 mb-8 font-mono text-[18px] hover:bg-[#524747] p-5 rounded-lg ease-in duration-1000">
                <div class="img">
                  <img class="w-16 h-16" src="right.png" alt="star" />
                </div>
                <div>
                  <h1 class="text-white font-semibold">100% Secured</h1>
                  <p class="text-white w-[450px]">
                    We take proactive steps make sure your information and
                    transactions are secure.
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5 font-mono text-[18px] hover:bg-[#524747] p-5 rounded-lg ease-in duration-1000">
                <div class="img">
                  <img class="w-16 h-16" src="tele.png" alt="star" />
                </div>
                <div>
                  <h1 class="text-white font-semibold">Balance Transfer</h1>
                  <p class="text-white w-[450px]">
                    A balance transfer credit card can save you a lot of money
                    in interest charges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex mt-96 pb-48 space-x-[548px] items-center">
            <div class="relative">
              <img
                class="absolute top-[-200px] right-[-200px] animate-bounce"
                src="card2.png"
                alt=""
              />
              <img class="" src="card1.png" alt="" />
            </div>
            <div>
              <div class="w-[470px]">
                <h1 class="font-semibold text-5xl text-white mb-6">
                  Easily control your billing & invoicing.
                </h1>
                <p class="font-semibold text-lg text-[#FFFFFF] mb-12">
                  Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                  ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                  integer platea placerat.
                </p>
              </div>
              <div class="flex space-x-[32px]">
                <img src="play.png" alt="" />
                <img src="store.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
