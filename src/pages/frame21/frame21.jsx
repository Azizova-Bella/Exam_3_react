import React from "react";
import computer from "../../assets/Group 990.png";
import center from "../../assets/Group 455.png";
import icon from "../../assets/bulb 1.png";
import map from "../../assets/map.png";
import map2 from "../../assets/map2.png";
import paper from "../../assets/paper.png";
import usa from "../../assets/image 20.png";
import lock1 from "../../assets/Group 1002.png";
import lock2 from "../../assets/Group 1003.png";
import lock3 from "../../assets/Group 1004.png";
import phone from "../../assets/Group 1014.png";
import man1 from "../../assets/Ellipse 311 (2).png";
import man2 from "../../assets/Ellipse 311 (1).png";

const Frame21 = () => {
  return (
    <div className="main">
      <section>
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Utility Bills for Amazon Account Verification
              </h1>
              <p className="text-gray-400 mt-4 lg:text-3xl text-sm md:text-base">
                You will receive complete documents in English ready to send
                out.
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
      </section>
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-10 mb-8">
          Documents ready to send out
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <img src={icon} className="w-10 h-10" />
              <span className="font-semibold">Electricity Bill</span>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <img src={icon} className="w-10 h-10" />
              <span className="font-semibold">Gas/Water Bill</span>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <img src={icon} className="w-10 h-10" />
              <span className="font-semibold">Internet Bill</span>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={center} className="w-60 md:w-80" />
          </div>

          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <img src={icon} className="w-10 h-10" />
              <span className="font-semibold">Rapidity</span>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <img src={icon} className="w-10 h-10" />
              <span className="font-semibold">English Language</span>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <img src={icon} className="w-10 h-10" />
              <span className="font-semibold">Manual</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
          <div className="lg:w-1/2 flex justify-center">
            <img src={map} alt="map" className=" lg:mr-20  h-auto" />
          </div>

          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Leave a request to get your utility bill
            </h2>
            <p className="text-[#889196] lg:text-[20px] mb-6">
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
      </section>
      <section className="px-6 md:px-16 py-12 space-y-12">
        <div className="flex flex-col  md:flex-row lg:justify-center items-center gap-1">
          <div className="md:w-1/2 lg:ml-[17%] text-center lg:w-[400px] md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Invoices for Amazon from a US supplier with a call
            </h2>
            <p className="text-[#889196] mb-4">
              You will receive complete documents in English ready to send out.
            </p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md">
              Get an invoice
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={paper} alt="Invoice" className="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center  gap-8">
          <div className="md:w-1/2 lg:w-[350px] lg:ml-[18%] lg:mt-20 lg:mb-20 text-center md:text-left">
            <h2 className="text-2xl lg:text-[27px] font-bold mb-4">
              Invoices from a US supplier
            </h2>
            <p className="text-[#889196]">
              This is an officially registered US wholesale supplier: The whole
              process will take place within the US law and complying with all
              Amazon requirements.
            </p>
            <br />
            <p className="text-[#889196] mt-2">
              You receive invoices with all the instructions in 1-2 days after
              ordering. The supplier can also answer Amazon call on invoices.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={usa} alt="USA Map" className="w-60 md:w-80" />
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 py-12 m-auto  text-center">
        <h2 className="text-2xl font-bold mb-4">Invoices can unlock</h2>
        <p className="text-[#889196] max-w-1xl mx-auto mb-8">
          If you receive an invoice request, then you can do more <br />
          than just unlocking your account.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="flex mt-10 flex-col items-center  justify-self-center text-center">
            <img src={lock1} alt="Account" className="mb-4" />

            <p className="text-[#889196] text-sm mt-2">
              Invoice is requested to verify <br />
              your account or in connection with some violations.
            </p>
          </div>
          <div className="flex mt-10 flex-col items-center text-center">
            <img src={lock2} alt="Listing" className="mb-4" />

            <p className="text-[#889196] text-sm mt-2">
              If you want permission to <br /> add a listing to your inventory.
            </p>
          </div>
          <div className="flex mt-10 flex-col items-center text-center">
            <img src={lock3} alt="Category" className="mb-4" />

            <p className="text-[#889196] text-sm mt-2">
              If you want to have access <br /> to a certain category.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 py-12 flex flex-col md:flex-row items-center gap-8">
        <img src={phone} alt="Amazon Call" className=" md:w-1/2" />
        <div className="md:w-1/2 text-center  lg:w-[400px] md:text-left">
          <h2 className="text-2xl lg:text-3xl lg:my-[50px] font-bold mb-4">
            We will answer an Amazon call on invoices
          </h2>
          <p className="text-[#889196] text-[20px] lg:w-[400px]">
            In 90% of cases, Amazon call suppliers on invoices. If the company
            doesn’t manage to contact the supplier, then you will receive an
            email that Amazon was “unable to verify the supplier”.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Leave a request to get your utility bill
            </h2>
            <p className="text-[#889196] lg:text-[20px] mb-6">
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
          <div className="lg:w-1/2 flex justify-center">
            <img src={map2} alt="map" className=" lg:ml-20 h-auto" />
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Frame21;
