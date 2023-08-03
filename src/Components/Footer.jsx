import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#00040F]">
      <section class="">
        <div class="container mx-auto">
          <div class="flex justify-between pt-36 pb-14">
            <div>
              <img class="w-52" src="logo.png" alt="" />
              <p class="text-white text-xl w-[320px] mt-3">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
            <div>
              <p class="text-[18px] text-white font-bold mb-6">Usefull Links</p>
              <p class="text-[16px] text-white mb-3">Content</p>
              <p class="text-[16px] text-white mb-3">How it Works</p>
              <p class="text-[16px] text-white mb-3">Create</p>
              <p class="text-[16px] text-white mb-3">Explore</p>
              <p class="text-[16px] text-white mb-3">Terms & Services</p>
            </div>
            <div>
              <p class="text-[18px] text-white font-bold mb-6">Community</p>
              <p class="text-[16px] text-white mb-3">Help Center</p>
              <p class="text-[16px] text-white mb-3">Partners</p>
              <p class="text-[16px] text-white mb-3">Suggestions</p>
              <p class="text-[16px] text-white mb-3">Blog</p>
              <p class="text-[16px] text-white mb-3">Newsletters</p>
            </div>
            <div>
              <p class="text-[18px] text-white font-bold mb-6">Partner</p>
              <p class="text-[16px] text-white mb-3">Our Partner</p>
              <p class="text-[16px] text-white mb-3">Become a Partner</p>
            </div>
          </div>

          <div class="my-10">
            <hr />
          </div>
          <div class="flex justify-between pb-5">
            <div>
              <p class="text-white text-[16px]">
                Copyright @ 2021 HooBank. All Rights Reserved.
              </p>
            </div>
            <div class="flex space-x-[30px]">
              <img src="ins.png" alt="" />

              <img src="fac.png" alt="" />
              <img src="ti.png" alt="" />
              <img src="link.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
