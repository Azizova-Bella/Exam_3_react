import React from "react";
import phone from "../../assets/phone.png";
import computer from "../../assets/Group 990.png";
import check1 from "../../assets/check1.png";
import check2 from "../../assets/check2.png";
import check3 from "../../assets/check3.png";
import world from "../../assets/world.png";
import wifi from "../../assets/wifi 1.png";
import seller from "../../assets/Group 775.png";
import seller2 from "../../assets/seller.png";
import info from "../../assets/information 1.png";
import arrow from "../../assets/arrow.png";
import man1 from "../../assets/Ellipse 311 (2).png";
import man2 from "../../assets/Ellipse 311 (1).png";
import karta from "../../assets/image 29.png";
import media from "../../assets/Group 895.png";
import flag from "../../assets/united-states (1) 1.png";
import { useTranslation } from "react-i18next";

const Buy_account = () => {
  const { t } = useTranslation();
  const accounts = [
    {
      name: "Flagman_Shop",
      market: "🇺🇸 US",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "100% positive",
      price: "$1,000",
    },
    {
      name: "Health Care Direct UK",
      market: "🇺🇸 US",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "100% positive",
      price: "$1,000",
    },
    {
      name: "Flagman_Shop",
      market: "🇺🇸 US",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "100% positive",
      price: "$1,000",
    },
    {
      name: "Health Care Direct UK",
      market: "🇺🇸 US",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "100% positive",
      price: "$1,000",
    },
    {
      name: "Flagman_Shop",
      market: "🇬🇧 GB",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "100% positive",
      price: "$1,000",
    },
    {
      name: "Health Care Direct UK",
      market: "🇬🇧 GB",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "98% positive",
      price: "$1,000",
    },
    {
      name: "Flagman_Shop",
      market: "🇬🇧 GB",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "87% positive",
      price: "$1,000",
    },
    {
      name: "Health Care Direct UK",
      market: "🇬🇧 GB",
      type: "Pro Account",
      year: 2019,
      reviews: "6 reviews",
      ratio: "80% positive",
      price: "$1,000",
    },
  ];
  return (
    <div className="main">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Start selling on Amazon right after buying an aged account or an
              entire online business
            </h1>
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              After your payment, you will be given access to full account
              details such as: login, e-mail details, bank card information and
              other important documentation.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md">
              → GET STARTED
            </button>
            <div className="flex gap-10 space-x-4 mt-6 text-gray-400">
              <img src={media} alt="" />

              <img src={media} alt="" />
            
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

      <div className="flex flex-col items-center text-center p-6 max-w-[1200px] mx-auto">
        <h2 className="text-[28px] lg:text-[32px] font-semibold">
          Amazon Global Selling:
        </h2>
        <p className="text-[18px] lg:text-[22px] text-gray-600 mb-10">
          Access to the top international retail markets
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 lg:w-[300px] lg:h-[450px] flex flex-col items-center">
            <img src={karta} alt="Americas" className="w-[150px] h-auto mb-6" />
            <h3 className="text-[20px] font-medium mb-4">Americas</h3>
            <ul className="text-[16px] text-gray-700">
              <li>Amazon.com</li>
              <li>Amazon.ca</li>
              <li>Amazon.com.mx</li>
              <li>Amazon.com.br</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 lg:w-[300px] lg:h-[450px] flex flex-col items-center">
            <img src={karta} alt="Europe" className="w-[150px] h-auto mb-6" />
            <h3 className="text-[20px] font-medium mb-4">Europe</h3>
            <ul className="text-[16px] text-gray-700">
              <li>Amazon.co.uk</li>
              <li>Amazon.de</li>
              <li>Amazon.fr</li>
              <li>Amazon.it</li>
              <li>Amazon.es</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 lg:w-[300px] lg:h-[450px] flex flex-col items-center">
            <img
              src={karta}
              alt="Asia-Pacific"
              className="w-[150px] h-auto mb-6"
            />
            <h3 className="text-[20px] font-medium mb-4">Asia-Pacific</h3>
            <ul className="text-[16px] text-gray-700">
              <li>Amazon.co.jp</li>
              <li>Amazon.cn</li>
              <li>Amazon.in</li>
              <li>Amazon.com.au</li>
            </ul>
          </div>
        </div>

       
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-[40px] lg:text-[50px] font-bold">13</p>
            <p className="text-[16px] lg:text-[18px] text-gray-600">
              Marketplaces
            </p>
          </div>
          <div>
            <p className="text-[40px] lg:text-[50px] font-bold">175+</p>
            <p className="text-[16px] lg:text-[18px] text-gray-600">
              Fulfillment Centers
            </p>
          </div>
          <div>
            <p className="text-[40px] lg:text-[50px] font-bold">180+</p>
            <p className="text-[16px] lg:text-[18px] text-gray-600">
              Countries with Loyal Amazon Customers
            </p>
          </div>
          <div>
            <p className="text-[40px] lg:text-[50px] font-bold">30+</p>
            <p className="text-[16px] lg:text-[18px] text-gray-600">
              Product Categories
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="max-w-4xl lg:max-w-6xl mx-auto p-4">
        <h2 className="text-center text-3xl  font-bold mb-10 mt-10 lg:text-5xl lg:mb-[100px] lg:mt-[100px]">
          List of aged accounts for sale
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Business name</th>
                <th className="py-2 px-4 text-left">Market</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Account age</th>
                <th className="py-2 px-4 text-left">Reviews</th>
                <th className="py-2 px-4 text-left">Ratio</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Account Details</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2 px-4">{acc.name}</td>
                  <td className="py-2 px-4 flex items-center gap-2">
                    <img
                      src={flag}
                      alt="US flag"
                      className="w-5 h-4"
                    />
                    US
                  </td>

                  <td className="py-2 px-4">{acc.type}</td>
                  <td className="py-2 px-4">{acc.year}</td>
                  <td className="py-2 px-4">{acc.reviews}</td>
                  <td className="py-2 px-4">{acc.ratio}</td>
                  <td className="py-2 px-4">{acc.price}</td>
                  <td className="py-2 px-4 text-blue-500 cursor-pointer">
                    More Info ▼
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col mt-[60px] sm:flex-row justify-between lg:mt-4 gap-2">
          <button className="w-full sm:w-auto py-2 px-4 border border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition">
            To learn more about the process click here →
          </button>
          <button className="w-full sm:w-auto py-2 px-4 border border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition">
            Interested in Selling Account Visit page →
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-center gap-10">
        <img src={phone} alt="Phone Mockup" className="w-full" />

        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center lg:text-left">
            Benefits you will get
          </h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-5xl">
                <img src={check1} alt="" className="w-[100px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Verified Amazon Accounts</h3>
                <p className="text-gray-500 text-sm">
                  Each account goes through an expanded multi-level
                  authentication before the commercial offer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-5xl">
                <img src={check2} alt="" className="w-[100px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Deal Safety</h3>
                <p className="text-gray-500 text-sm">
                  We ensure the security of the account transaction between the
                  seller and the buyer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-5xl">
                <img src={check3} alt="" className="w-[100px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">After-purchase Support</h3>
                <p className="text-gray-500 text-sm">
                  We will provide technical support within 14 days after the
                  purchase. We are happy to answer all your questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-center gap-10">
        <img src={world} alt="Globe" className="w-[550px]" />

        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold">Amazon verified accounts</h2>
          <p className="text-gray-500 mt-2">
            Become an Amazon seller! We offer country-based accounts for selling
            on Amazon.
          </p>

          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-3xl">
                <img src={wifi} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Work around the world</h3>
                <p className="text-gray-500 text-sm">
                  The account will be installed on <br />
                  the server with a special IP address.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-3xl">
                {" "}
                <img src={wifi} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-lg">All types of selling</h3>
                <p className="text-gray-500 text-sm">
                  Dropshipping, Online Arbitrage, <br />
                  Private Label.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white">
              <div className="text-red-500 text-3xl">
                {" "}
                <img src={wifi} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Money flow</h3>
                <p className="text-gray-500 text-sm">
                  All payments will go to your Payoneer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-6 flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-1">
          <img
            src={seller}
            alt="Amazon Seller"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Buy new or aged Amazon Seller account
          </h2>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold">Aged seller accounts</h3>
            <p className="text-gray-600 text-sm mt-1">
              Aged seller accounts are checked by account health, sales history,
              suspensions, type of fulfillment used to sell, feedback quantity
              and quality, all performance notifications and ungated brands or
              categories. As we are having a dropshipping business on Amazon, we
              know everything about suspensions and importance to check all this
              information before selling any of the accounts.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">New seller accounts</h3>
            <p className="text-gray-600 text-sm mt-1">
              New seller accounts that were not suspended upon registration and
              are almost guaranteed to have no utility bill request in future.
              We never experienced Amazon asking for a utility bill in case it
              wasn't requested in the beginning. These accounts can be used both
              for selling or for technical purposes.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Pricing</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 border rounded-lg border-none shadow-sm flex justify-between items-center cursor-pointer">
            <span className="font-semibold">New Amazon Seller Account</span>
            <span>▼</span>
          </div>
          <div className="bg-white p-4 border rounded-lg border-none shadow-sm flex justify-between items-center cursor-pointer">
            <span className="font-semibold">Aged Amazon Seller Account</span>
            <span>▼</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mt-12 mb-6">Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-orange-500 text-white w-12 h-12 flex justify-center items-center rounded-full font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold mt-2 mb-[20px]">Check your account</h3>
            <p className="text-gray-600 text-sm mt-1">
              Check the account of your choice via TeamViewer or Any Desk. You
              inspect the account from your end to confirm your selection.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-orange-500 text-white w-12 h-12 flex justify-center items-center rounded-full font-bold text-lg">
              2
            </div>
            <h3 className="font-semibold mt-2 mb-[20px]">Payment</h3>
            <p className="text-gray-600 text-sm mt-1">
              We take a payment using your preferred method. We accept:
              Payoneer, bank transfer and bitcoin.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-orange-500 text-white w-12 h-12 flex justify-center items-center rounded-full font-bold text-lg">
              3
            </div>
            <h3 className="font-semibold mt-2 mb-[20px]">Account ownership</h3>
            <p className="text-gray-600 text-sm mt-1">
              We give you all the log in details to your new account. After
              that, you set up your own password and Two-Step authentification
              methods for your Amazon account and Virtual Proxy Server where
              your account is located.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-orange-500 text-white w-12 h-12 flex justify-center items-center rounded-full font-bold text-lg">
              4
            </div>
            <h3 className="font-semibold mt-2 mb-[20px]">Account setup</h3>
            <p className="text-gray-600 text-sm mt-1">
              We help you set up the details like your deposit/change method,
              business address and legal entity on your Amazon account.
            </p>
          </div>
        </div>
      </div>

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
        <h2 className="font-bold my-20 text-4xl text-center pb-[10px]">FAQ</h2>
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

export default Buy_account;
