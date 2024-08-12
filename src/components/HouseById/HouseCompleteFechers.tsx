import {
  CollingSystem,
  Elavator,
  FloorMaterial,
  HeatingSystem,
  Parking,
  WarHouse,
  Wc,
  WCType,
} from "../../icons/FetchHouseIcon";

interface HouseCompleteFechersType {
  parking?: number;
  wc?: number;
  warhouse?: number;
  wctype?: string;
  elavator?: number;
  collingsystem?: string;
  floorMaterial?: string;
  heatingSystem?: string;
}

const HouseCompleteFechers: React.FC<HouseCompleteFechersType> = ({
  collingsystem,
  elavator,
  floorMaterial,
  heatingSystem,
  parking,
  warhouse,
  wc,
  wctype,
}) => {
  const Feachers = [
    {
      id: 1,
      text: "Parking:",
      icon: <Parking />,
      body: `${parking ?? "0"}`,
    },
    {
      id: 2,
      text: "W.C:",
      icon: <Wc />,
      body: `${wc ?? "0"}`,
    },
    {
      id: 3,
      text: "Warehouse:",
      icon: <WarHouse />,
      body: `${warhouse ?? "0"}`,
    },
    {
      id: 4,
      text: "Type of bathroom:",
      icon: <WCType />,
      body: `${wctype}`,
    },
    {
      id: 5,
      text: "Elevator:",
      icon: <Elavator />,
      body: `${elavator ?? "0"}`,
    },
    {
      id: 6,
      text: "Cooling system:",
      icon: <CollingSystem />,
      body: `${collingsystem}`,
    },
    {
      id: 7,
      text: "Floor material:",
      icon: <FloorMaterial />,
      body: `${floorMaterial}`,
    },
    {
      id: 8,
      text: "Heating system:",
      icon: <HeatingSystem />,
      body: `${heatingSystem}`,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-xl">Facilities</h2>
      <div className="flex flex-wrap justify-center items-center">
        {Feachers.map((fecher) => (
          <div key={fecher.id} className="w-1/2 flex gap-2 py-3">
            {fecher.icon}
            <p className="font-medium text-sm md:text-base">{fecher.text}</p>
            <p className="font-medium text-sm md:text-base">{fecher.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseCompleteFechers;
