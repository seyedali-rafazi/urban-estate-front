import { Warn } from "../../icons/FetchHouseIcon";

interface FechHousePriceType {
  city?: string;
  price: number;
}

const FechHousePrice: React.FC<FechHousePriceType> = ({ city, price }) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center p-3 border border-gray-250 rounded-xl">
        <p className="font-bold text-xl">Price</p>
        <p className="font-medium">
          {price || "0"} $
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="font-semibold"> Advertised in{city}</p>
          <div className="flex justify-center items-center gap-2">
            <Warn />
            <p className="font-medium text-sm">Ad violation report</p>
          </div>
        </div>
        <p className="font-medium text-sm">Ad ID 2324</p>
      </div>
    </div>
  );
};

export default FechHousePrice;
