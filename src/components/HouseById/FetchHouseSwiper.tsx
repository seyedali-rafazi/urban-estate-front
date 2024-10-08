import { SwiperSlide } from "swiper/react";
import SaghfinooSwiper from "../../ui/SaghfinooSwiper";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHouses } from "../../redux/feachers/products/houseActions";
import { SaveFavourite, SaveFavouriteMini } from "../../icons/FetchHouseIcon";
import { Link } from "react-router-dom";
import Skeleton from "../../ui/Skeleton";

const FetchHouseSwiper: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { items, loading } = useSelector((state: RootState) => state.house);

  const params = {
    houseGroup: "",
    sort: "",
  };

  useEffect(() => {
    
    dispatch(fetchHouses(params));
  }, [dispatch]);

  console.log(items);

  return !loading ? (
    <SaghfinooSwiper xl={3} sm={2} slidesPerView={2}>
      {items.map((item) => (
        <SwiperSlide key={item._id} className="flex justify-center">
          <Link
            to={`/house-details/${item._id}`}
            className="flex flex-col flex-1 gap-3"
          >
            <div className="relative w-full h-[100px] sm:h-[170px] bg-cover rounded-lg">
              <img
                role="presentation"
                onError={(e) => {
                  e.currentTarget.src = "/photos/default.webp";
                }}
                className="absolute w-full h-full object-cover rounded-t-lg"
                src={item.imageLink}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-350">
                  {item.houseGroup.title}&nbsp;House
                </p>
                <div className="sm:hidden">
                  <SaveFavouriteMini />
                </div>
                <div className="hidden sm:block">
                  <SaveFavourite />
                </div>
              </div>
              <p className="font-bold text-sm sm:text-lg">{item.title}</p>
              <p className="font-medium text-sm hidden sm:block">
                {item.description}
              </p>
              <p className="font-medium text-sm">
                {item.price}&nbsp;$
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </SaghfinooSwiper>
  ) : (
    <div className="flex gap-3">
      <Skeleton cards={3} />
    </div>
  );
};

export default FetchHouseSwiper;
