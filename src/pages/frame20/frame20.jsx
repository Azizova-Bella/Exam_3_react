import React from "react";
import computer from "../../assets/Group 1000.png";
import img1 from "../../assets/analysis 1.png";
import back from "../../assets/Group 655.png";
import icon1 from "../../assets/account 1.png";
import man1 from "../../assets/Ellipse 311 (2).png";
import man2 from "../../assets/Ellipse 311 (1).png";
import seller2 from "../../assets/seller.png";
const Frame20 = () => {
  return (
    <div className="main">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Amazon Complex Launch
            </h1>
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              Business on Amazon is a profitable thing but it’s not easy and
              time-consuming. Our team has been through it for multiple times.
              We will build your business as well: we do and consult, you make
              decisions.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md">
              → GET STARTED
            </button>
            <div className="flex space-x-4 mt-6 text-gray-400">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={computer}
              alt="Laptops displaying Amazon account"
              className="max-w-xs md:max-w-md"
            />
          </div>
        </div>
        <div className="text-center mt-12 text-gray-500 text-sm">SCROLL</div>
      </div>
      <section className="mb-10">
        <div className="max-w-5xl mx-auto p-4 text-center">
          <h2 className="text-2xl font-bold mt-10 mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 ">
            <div className="p-6  rounded-lg shadow-lg">
              <img src={img1} alt="Analytics" className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Analytics</h3>
              <ul className="text-sm text-[#889196] text-left">
                <li>Analysis of the USA and European markets</li>
                <li>Selection of the niche and product on Amazon</li>
                <li>Business plan development</li>
              </ul>
            </div>
            <div className="p-10 pb-[150px]  rounded-lg shadow-lg">
              <img src={img1} alt="Suppliers" className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Suppliers</h3>
              <ul className="text-sm text-[#889196] text-left">
                <li>Supplier search</li>
                <li>Supplier revision</li>
                <li>Goods inspection</li>
                <li>Delivery of goods to Amazon warehouse</li>
              </ul>
            </div>
            <div className="p-10 pb-[150px]   rounded-lg shadow-lg">
              <img src={img1} alt="Listing" className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Listing</h3>
              <ul className="text-sm text-[#889196] text-left">
                <li>Analysis of competitor’s reviews and goods</li>
                <li>Keywords selection (200-600)</li>
                <li>Copywriting texts</li>
                <li>Product photosession (actionable, in studio)</li>
              </ul>
            </div>
            <div className="p-10 pb-[150px]  rounded-lg shadow-lg">
              <img src={img1} alt="Branding" className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Branding</h3>
              <ul className="text-sm text-[#889196] text-left">
                <li>Creation of new brand name</li>
                <li>Development of logo and style</li>
                <li>Package design</li>
                <li>Creation of additional production materials</li>
              </ul>
            </div>
            <div className="p-10 pb-[150px]  rounded-lg shadow-lg">
              <img src={img1} alt="Marketing" className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Marketing</h3>
              <ul className="text-sm text-[#889196] text-left">
                <li>PPC advertising (Amazon, Facebook, Google, Instagram)</li>
                <li>Listing audit and optimization</li>
                <li>Review generation</li>
                <li>Landing page development</li>
              </ul>
            </div>
            <div className="p-10 pb-[150px]  rounded-lg shadow-lg ">
              <img src={img1} alt="Data Scraping" className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data Scraping</h3>
              <ul className="text-sm text-[#889196] text-left">
                <li>Action plan for eCommerce growth</li>
                <li>Digital shelf analytics for any retailer</li>
                <li>Amazon sales, share, traffic, and conversion analytics</li>
                <li>Expert recommendations & analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={back} alt="Team Image" className="" />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl lg:text-4xl font-bold lg:mb-20">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Account Manager</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Retoucher</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Copywriter</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Logisticians</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Photographer</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Project Manager</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Marketer</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">Designer</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={icon1} alt="Icon" className="w-10 h-10" />
              <span className="text-[#889196]">PPC-specialist</span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img src={icon1} alt="Icon" className="mx-auto w-12 h-12" />
            <h3 className="text-lg font-semibold mt-4">Make your choice</h3>
            <p className="text-[#889196] mt-2">
              Select all necessary <br /> services you need.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img src={icon1} alt="Icon" className="mx-auto w-12 h-12" />
            <h3 className="text-lg font-semibold mt-4">Submit a request</h3>
            <p className="text-[#889196] mt-2">
              Complete the form <br /> and send it to us.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img src={icon1} alt="Icon" className="mx-auto w-12 h-12" />
            <h3 className="text-lg font-semibold mt-4">Work Evaluation</h3>
            <p className="text-[#889196] mt-2">
              We will apply the <br /> best offer to you.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <img src={icon1} alt="Icon" className="mx-auto w-12 h-12" />
            <h3 className="text-lg font-semibold mt-4">Start Working</h3>
            <p className="text-[#889196] mt-2">
              That’s it! We are ready to <br /> start working.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
          <div className="lg:w-1/2 flex justify-center">
            <img src={seller2} alt="Person" className="w-120 h-auto" />
          </div>

          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Leave a Request
            </h2>
            <p className="text-gray-600 lg:text-[20px] mb-6">
              It will take you less than sixty seconds. A member of our team
              will contact you shortly after.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Telephone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                Send
              </button>
            </form>
          </div>
        </div>
        <section className="text-center lg:mt-20 lg:mb-40 py-10">
          <h2 className="text-3xl lg:text-5xl  lg:mb-20 font-bold mb-6">
            What our clients say
          </h2>
          <div className="flex justify-center gap-16">
            <div className="max-w-sm text-left">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={man1}
                  alt="Steven Cody"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-orange-500 text-4xl">“</span>
              </div>
              <p className="text-gray-400 mb-4">
                I have to say, "amazmarkets" gets over an A+ rating from me. I
                will be recommending this company and team to everyone. Thanks
                again!
              </p>
              <p className="font-bold">Steven Cody</p>
            </div>

            <div className="max-w-sm text-left lg:block hidden">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={man2}
                  alt="Jason Luis"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-orange-500 text-4xl">“</span>
              </div>
              <p className="text-gray-400 mb-4">
                Excellent and professional service. Very friendly and helpful.
                Would definitely use again. Highly recommend!
              </p>
              <p className="font-bold">Jason Luis</p>
            </div>
            
          </div>
          <div className="flex justify-center mt-10 gap-2">
          <span className="w-6 h-1 bg-orange-500"></span>
          <span className="w-6 h-1 border border-orange-500"></span>
          <span className="w-6 h-1 border border-orange-500"></span>
          <span className="w-6 h-1 border border-orange-500"></span>
        </div>
        </section>
      </section>
    </div>
  );
};

export default Frame20;
