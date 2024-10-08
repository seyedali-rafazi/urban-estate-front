import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import { Link } from "react-router-dom";
import { SaghfinooDetails } from "../../data/HomeData";

const SaghfinooSummery: React.FC = () => {
  return (
    <div className="my-10 space-y-8 text-gray-800 max-w-[1640px] mx-auto">
      <h2 className="font-bold text-lg xl:text-xl mx-10 sm:mx-12 md:mx-14 text-center">
        How UrbanState helps you become a homeowner
      </h2>
      <div className="mx-10 sm:mx-14 md:mx-20 lg:mx-28">
        <SaghfinooSwiper>
          {SaghfinooDetails.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col justify-between bg-gray-100 gap-8 rounded-lg border border-gray-200 h-full">
                <div className="flex flex-col gap-6">
                  <div className="min-h-48">
                    <img
                      role="presentation"
                      onError={(e) => {
                        e.currentTarget.src = "/photos/default.webp";
                      }}
                      className="rounded-lg"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-center font-black text-lg">
                      {item.header}
                    </h4>
                    <p className="text-center font-medium lg:text-sm xl:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center p-6">
                  <Link
                    className="w-full text-center bg-primary p-2 text-white font-bold rounded-lg"
                    to={item.path}
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SaghfinooSwiper>
      </div>
    </div>
  );
};

export default SaghfinooSummery;
