import React from "react";
import computer from "../../assets/Group 990.png";
import check1 from "../../assets/check1.png";
import check2 from "../../assets/check2.png";
import check3 from "../../assets/check3.png";
import phone from "../../assets/Group 1016.png";
import phone2 from "../../assets/Group 1013.png";
import one from "../../assets/Group 659.png";
import two from "../../assets/Group 509.png";
import seller2 from "../../assets/seller.png";
import info from "../../assets/information 1.png";
import arrow from "../../assets/arrow.png";
import man1 from "../../assets/Ellipse 311 (2).png";
import man2 from "../../assets/Ellipse 311 (1).png";

const Buy_account2 = () => {
  return (
    <div className="main">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Sell your Amazon account with us. Use our online evaluation tool
              to determine how much your account could be worth
            </h1>
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              Our professional team will support you with the sales and transfer
              of your Amazon account.
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
      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-center gap-10">
        <img
          src={phone}
          alt="Phone Mockup"
          className=" w-full ml-[-70px] lg:w-[600px]"
        />

        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center lg:text-left">
            The evaluation workflow
          </h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-5xl">
                <img src={check1} alt="" className="w-[50px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Submit a valuation request
                </h3>
                <p className="text-gray-500 text-sm">
                  Simply answer the question using our online form.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-5xl">
                <img src={check2} alt="" className="w-[100px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">We get to know each other</h3>
                <p className="text-gray-500 text-sm">
                  One of our friendly sales managers will contact you to request
                  additional information and will also answer all your
                  questions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-5xl">
                <img src={check3} alt="" className="w-[100px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">We suggest a fair price</h3>
                <p className="text-gray-500 text-sm">
                  After reviewing all the information you have submitted and
                  taking your opinion into account we suggest a fair and honest
                  price for your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[1400px] flex flex-col lg:flex-row justify-center px-[5%] mt-20 gap-10">
        <div className="lg:w-[40%] ">
          <h1 className="text-3xl font-bold mb-4">
            Feel free to use our online evaluation tool to find out how much
            your account could be worth
          </h1>
          <p className="text-gray-600 mb-8">
            It will take you less than sixty seconds. A member of our team will
            contact you shortly after.
          </p>
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-3">
              <img src={one} className="w-14" />
              <p>
                Use our online evaluation tool to find out how much your account
                could be worth.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} className="w-14" />
              <p>
                Our specialist will contact you and explain how the transfer
                process will commence.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} className="w-14" />

              <p>Contact agreement - signed by both parties.</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} className="w-14" />

              <p>Payment confirmation.</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-gray-200 border p-2 rounded-lg lg:w-[33%]">
          <h2 className="text-2xl font-bold mb-6">Evaluation Tool</h2>
          <div className="">
            <div>
              <label className="block mb-3 font-medium">
                Account registration date:
              </label>
              <div className="flex gap-1 border-black border-2 justify-evenly rounded-sm">
                <button className="p-[5px] bg-white rounded-md">2019</button>
                <button className="p-[5px] bg-black text-white">2018</button>
                <button className="p-[5px] bg-white rounded-md">2017</button>
                <button className="p-[5px] bg-white rounded-md">2016</button>
                <button className="p-[5px] bg-white rounded-md">2015</button>
                <button className="p-[5px] bg-white rounded-md">Earlier</button>
              </div>
            </div>

            <div>
              <label className="block font-medium mt-3">
                Amount of customer feedbacks:
              </label>
              <div className="flex gap-1 border-black border-2 justify-evenly rounded-sm">
                <button className="p-[5px] bg-white rounded-md">50</button>
                <button className="p-[5px] px-3 bg-black text-white">
                  50+
                </button>
                <button className="p-[5px] bg-white rounded-md">100+</button>
                <button className="p-[5px] bg-white rounded-md">500+</button>
                <button className="p-[5px] bg-white rounded-md">1000+</button>
              </div>
            </div>

            <div>
              <label className="block mt-5 font-medium">
                Amazon marketplace location:
              </label>
              <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                <button className="bg-black text-white  p-[5px] px-20">
                  USA
                </button>
                <button className=" p-[5px] px-20">Europe</button>
              </div>
            </div>
            <div>
              <label className="block mt-5 font-medium">
                Received policy violation notifications in the past year:
              </label>
              <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                <button className="bg-black text-white  p-[5px] px-22">
                  YES
                </button>
                <button className=" p-[5px] px-20">NO</button>
              </div>
            </div>

            <div>
              <label className="block mt-5 font-medium">
                Your email address*
              </label>
              <input
                type="email"
                placeholder="Enter your email address here"
                className="w-full p-3 mt-2 border rounded-md outline-none"
              />
            </div>

            <button className="w-full bg-[#EC6D0F] mt-5 text-white py-3 ">
              Get Evaluation
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-24 lg:flex-row items-center py-10 px-6">
        <div className="img">
          <img src={phone2} alt="" />
        </div>

        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-4">
            A step by step explanation of the transfer and sales process
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img src={one} alt="" />
              <div>
                <p className="font-bold">
                  Submit calculator and appoint a call
                </p>
                <p className="text-gray-600">
                  Find out the cost of your account and book a call to consult
                  with our manager.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} alt="" />
              <div>
                <p className="font-bold">
                  Receive an email with screen sharing details
                </p>
                <p className="text-gray-600">
                  You will receive call details and your manager’s name.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} alt="" />
              <div>
                <p className="font-bold">
                  Account assessment and price negotiation
                </p>
                <p className="text-gray-600">
                  Our team member will make a screen sharing session with you to
                  check your account statistics.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} alt="" />
              <div>
                <p className="font-bold">It’s time to sign a bill of sale</p>
                <p className="text-gray-600">
                  We use e-signature for a bill of sale.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} alt="" />
              <div>
                <p className="font-bold">Accept funds for your account</p>
                <p className="text-gray-600">
                  You will receive money for your account in 2-3 business days.
                  You will get the confirmation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={one} alt="" />
              <div>
                <p className="font-bold">
                  Transferring your account to a new owner
                </p>
                <p className="text-gray-600">
                  Schedule a time for a final screen sharing session. We will
                  help you to fill in details for your account transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-10 px-6">
        <h2 className="text-2xl font-bold mb-2 lg:text-3xl">
          Details that will be changed <br /> during an account transfer
        </h2>
        <p className="text-gray-600 mb-6">The deal usually takes 5 days.</p>

        <div className="flex flex-col justify-center lg:flex-row gap-6 lg:gap-[50px]">
          <div className="text-center">
            <img
              src={two}
              alt="Business details"
              className="w-20 lg:w-auto mx-auto"
            />
            <p className="font-bold text-[20px]">Business details</p>
          </div>
          <div className="text-center">
            <img
              src={two}
              alt="Credit card"
              className="w-20 mx-auto lg:w-auto"
            />
            <p className="font-bold text-[20px]">Credit card</p>
          </div>
          <div className="text-center">
            <img
              src={two}
              alt="Bank details"
              className="w-20 mx-auto lg:w-auto"
            />
            <p className="font-bold text-[20px]">Bank details</p>
          </div>
          <div className="text-center">
            <img src={two} alt="Address" className="w-20 mx-auto lg:w-auto" />
            <p className="font-bold text-[20px]">Address</p>
          </div>
          <div className="text-center">
            <img
              src={two}
              alt="Phone number"
              className="w-20 mx-auto lg:w-auto"
            />
            <p className="font-bold text-[20px]">Phone number</p>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:mt-20 lg:flex-row items-center max-w-4xl mx-auto p-4">
        <div className="lg:w-1/2 flex justify-center">
          <img src={seller2} alt="Person" className="w-120 h-auto" />
        </div>

        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Leave a Request
          </h2>
          <p className="text-gray-600 lg:text-[20px] mb-6">
            It will take you less than sixty seconds. A member of our team will
            contact you shortly after.
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

        <div className="flex justify-center mt-6 gap-2">
          <span className="w-6 h-1 bg-orange-500"></span>
          <span className="w-6 h-1 border border-orange-500"></span>
          <span className="w-6 h-1 border border-orange-500"></span>
          <span className="w-6 h-1 border border-orange-500"></span>
        </div>
      </section>
      <section className="mb-[100px]">
        <h2 className="font-bold my-10 text-4xl text-center pb-[10px]">FAQ</h2>
        <div className="flex justify-between lg:w-[40%] w-[60%] mt-10 rounded-2xl items-center m-auto p-3 border border-gray-200 ">
          <div className="flex items-start gap-4">
            <img src={info} />
            <div>
              <p className="font-bold">General Inquiriest</p>
              <p className="text-sm">
                Common information about the work of AmazMarkets.
              </p>
            </div>
          </div>
          <img src={arrow} />
        </div>
      </section>
    </div>
  );
};

export default Buy_account2;
