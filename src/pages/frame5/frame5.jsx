import React from "react";
import log from "../../assets/Ellipse 36.png";
import world from "../../assets/MYbhN8KaaEc.png";
import pic1 from "../../assets/MYbhN8KaaEc (1).png";
import pic2 from "../../assets/MYbhN8KaaEc (2).png";
import pic3 from "../../assets/MYbhN8KaaEc (3).png";
import pic4 from "../../assets/MYbhN8KaaEc (4).png";
import pic5 from "../../assets/MYbhN8KaaEc (5).png";
import pic6 from "../../assets/MYbhN8KaaEc (6).png";
import pic7 from "../../assets/MYbhN8KaaEc (7).png";
import pic8 from "../../assets/MYbhN8KaaEc (8).png";

const Frame5 = () => {
  return (
    <div className="main">
      <section className="py-10 px-6">
        <p className="hidden lg:block  ml-[10%] mb-20">HOME / BLOG</p>
        <h1 className="text-5xl font-bold  text-center mb-20">BLOG</h1>
        <div className="flex flex-col lg:flex-row gap-4 justify-center mb-20">
          {Array(5)
            .fill("All categories")
            .map((category, index) => (
              <button
                key={index}
                className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg"
              >
                {category}
              </button>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-[50px] items-center">
          <div className="max-w-lg">
            <img
              src={world}
              alt="Blog"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="max-w-lg">
            <h2 className="text-2xl font-bold mb-4">
              CRYPTO TRADING RECOMMENDATIONS
            </h2>
            <p className="text-gray-600 mb-6">
              Usually, there are three main types of trades – short, medium and
              long term. In the industry, there are only two main types of
              cryptocurrency, short term and long term.
            </p>
            <div className="flex items-center gap-3">
              <img
                src={log}
                alt="AmazMarkets Logo"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic1}
              alt="CRYPTO TRADING SYSTEM"
              className=" object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING SYSTEM
            </h3>
            <p className="text-gray-600 mb-4">
              The market of trading cryptocurrencies and tokens has long
              exceeded a turnover of 100 billion USD. Find out how to enter the
              token market.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic2}
              alt="CRYPTO TRADING PROGRAMS FAQ AND NEWS"
              className=" object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING PROGRAMS FAQ AND NEWS
            </h3>
            <p className="text-gray-600 mb-4">
              The Internet has provided a lot of opportunities for earning
              online, and with the advent of blockchain the list of possible
              sources of income has expanded even more.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic3}
              alt="CRYPTO TRADING SYSTEM"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING SYSTEM
            </h3>
            <p className="text-gray-600 mb-4">
              The market of trading cryptocurrencies and tokens has long
              exceeded a turnover of 100 billion USD. Find out how to enter the
              token market.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic4}
              alt="CRYPTO TRADING PROGRAMS FAQ AND NEWS"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING PROGRAMS FAQ AND NEWS
            </h3>
            <p className="text-gray-600 mb-4">
              The Internet has provided a lot of opportunities for earning
              online, and with the advent of blockchain the list of possible
              sources of income has expanded even more.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic5}
              alt="BEST CRYPTO TRADING GROUPS"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              BEST CRYPTO TRADING GROUPS
            </h3>
            <p className="text-gray-600 mb-4">
              Trading cryptocurrencies or cryptotrading is a type of activity
              based on a spread of exchanging prices between currency and crypto
              assets, as well as the use of digital derivatives.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic3}
              alt="CRYPTO TRADING SYSTEM"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING SYSTEM
            </h3>
            <p className="text-gray-600 mb-4">
              The market of trading cryptocurrencies and tokens has long
              exceeded a turnover of 100 billion USD. Find out how to enter the
              token market.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic4}
              alt="CRYPTO TRADING PROGRAMS FAQ AND NEWS"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING PROGRAMS FAQ AND NEWS
            </h3>
            <p className="text-gray-600 mb-4">
              The Internet has provided a lot of opportunities for earning
              online, and with the advent of blockchain the list of possible
              sources of income has expanded even more.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic5}
              alt="BEST CRYPTO TRADING GROUPS"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              BEST CRYPTO TRADING GROUPS
            </h3>
            <p className="text-gray-600 mb-4">
              Trading cryptocurrencies or cryptotrading is a type of activity
              based on a spread of exchanging prices between currency and crypto
              assets, as well as the use of digital derivatives.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic6}
              alt="CRYPTO TRADING SYSTEM"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING SYSTEM
            </h3>
            <p className="text-gray-600 mb-4">
              The market of trading cryptocurrencies and tokens has long
              exceeded a turnover of 100 billion USD. Find out how to enter the
              token market.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic7}
              alt="CRYPTO TRADING PROGRAMS FAQ AND NEWS"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              CRYPTO TRADING PROGRAMS FAQ AND NEWS
            </h3>
            <p className="text-gray-600 mb-4">
              The Internet has provided a lot of opportunities for earning
              online, and with the advent of blockchain the list of possible
              sources of income has expanded even more.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={pic8}
              alt="BEST CRYPTO TRADING GROUPS"
              className="w-[400px] h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              BEST CRYPTO TRADING GROUPS
            </h3>
            <p className="text-gray-600 mb-4">
              Trading cryptocurrencies or cryptotrading is a type of activity
              based on a spread of exchanging prices between currency and crypto
              assets, as well as the use of digital derivatives.
            </p>
            <div className="flex items-center space-x-2">
              <img src={log} alt="AmazMarkets Logo" className="w-6 h-6" />
              <p className="text-sm text-gray-500">
                AMAZMARKETS - October 2, 2019 - 4 days
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-20 p-4">
      <button className="border border-orange-500 rounded px-3 py-1 text-orange-500 hover:bg-orange-100">&#x276E;</button>
      <button className="bg-orange-500 text-white px-3 py-1 rounded">1</button>
      <button className="border border-orange-500 rounded px-3 py-1 text-orange-500 hover:bg-orange-100">2</button>
      <button className="border border-orange-500 rounded px-3 py-1 text-orange-500 hover:bg-orange-100">3</button>
      <button className="border border-orange-500 rounded px-3 py-1 text-orange-500 hover:bg-orange-100">4</button>
      <button className="border border-orange-500 rounded px-3 py-1 text-orange-500 hover:bg-orange-100">...</button>
      <button className="border border-orange-500 rounded px-3 py-1 text-orange-500 hover:bg-orange-100">15</button>
      <button className="border border-orange-500 rounded px-3 py-1 text-orange-500 hover:bg-orange-100">&#x276F;</button>
    </div>
      </section>
    </div>
  );
};

export default Frame5;
