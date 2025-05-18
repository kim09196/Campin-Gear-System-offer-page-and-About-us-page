import React from "react";
import { Link } from "react-router-dom";
import Imageslider from "../helpers/imageslider";
import image1 from "../assets/product1.png";
import image2 from "../assets/product2.png";
import image3 from "../assets/product3.png";
import image4 from "../assets/product4.png";
import sss from "../assets/ss.jpg";
import social from "../assets/social.jpg"

const Offers = () => {
  const offerItems = [
    {
      id: 1,
      image: image1,
      title: "Product 1",
      description:
        "A card component has a figure, a body part, and inside the body, there are title and actions parts.",
      link: "/product/1",
    },
    {
      id: 2,
      image: image2,
      title: "Product 2",
      description:
        "A card component has a figure, a body part, and inside the body, there are title and actions parts.",
      link: "/product/2",
    },
    {
      id: 3,
      image: image3,
      title: "Product 3",
      description:
        "A card component has a figure, a body part, and inside the body, there are title and actions parts.",
      link: "/product/3",
    },
    {
      id: 4,
      image: image4,
      title: "Product 4",
      description:
        "A card component has a figure, a body part, and inside the body, there are title and actions parts.",
      link: "/product/4",
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center px-4 md:px-8">
      <div className="max-w-[1350px] w-full py-8">
        {/* Image Slider */}
        <Imageslider />

        {/* Season Offers Section */}
        <div className="w-full">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center py-2">
            Season Offers
          </h1>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                {/* Weekly Offer Badge */}
                <div className="absolute top-3 left-3 bg-yellow-400 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Weekly Offer
                </div>

                {/* Image */}
                <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />

                {/* Card Body */}
                <div className="p-4 border-t border-green-200">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  <div className="mt-4 flex justify-end">
                    <Link
                      to={item.link}
                      className="bg-white text-black border border-black py-1.5 px-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 text-sm md:text-base"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       {/* WE CARE Section */}
<div className="py-8 mt-10 bg-green-50 px-4 md:px-6">
  <div className="flex flex-col lg:flex-row gap-4 items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
     
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">BE A CAMPER</h2>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify mb-4">
        We prioritize the comfort, safety, and environmental sustainability of all camping
        enthusiasts. Our goal is to ensure every adventurer has access to reliable gear while
        promoting responsible outdoor activities.
      </p>
      <div className="mt-4">
        <Link
          to="/camper"
          className="bg-white text-black border border-black py-1.5 px-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 text-sm md:text-base"
        >
          TRY NOW
        </Link>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <img src={sss} alt="WE CARE" className="rounded shadow-lg w-full h-56 md:h-72 object-cover" />
    </div>
  </div>
</div>
















{/* Social Media Offers Section */}
<div className="py-8 mt-10 bg-green-50 px-4 md:px-6">
  <div className="flex flex-col lg:flex-row gap-4 items-center">
    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <img src={social} alt="Social Media Offers" className="rounded shadow-lg w-full h-56 md:h-72 object-cover" />
    </div>
    {/* Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <div className="inline-block bg-yellow-400 text-gray-800 text-xl font-semibold px-2 py-2 rounded-full mb-2">
        TAG & WIN
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">SOCIAL MEDIA OFFERS</h2>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
      </p>
      <div className="mt-4">
        <Link
          to="/social-media-offers"
          className="bg-white text-black border border-black py-1.5 px-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 text-sm md:text-base"
        >
          Try Now
        </Link>
      </div>
    </div>
  </div>
</div>





      </div>
    </div>
  );
};

export default Offers;
