import { Floor, Metr, Room } from "../../icons/FetchHouseIcon";

interface HouseFeachersType {
  floor: number;
  rooms: number;
}

const HouseFeachers: React.FC<HouseFeachersType> = ({ floor, rooms }) => {
  const Feachers = [
    {
      id: 1,
      title: "Meterage",
      text: ` 115 m`,
      icon: <Metr />,
    },
    {
      id: 2,
      title: "Room",
      text: `${rooms || "0"} Room`,
      icon: <Room />,
    },
    {
      id: 3,
      title: "Floor",
      text: ` Floor ${floor || "0"}`,
      icon: <Floor />,
    },
  ];
  return (
    <div className="w-full flex justify-between items-center ">
      {Feachers.map((feacher) => (
        <div
          className="flex flex-col justify-center items-center"
          key={feacher.id}
        >
          <div className="flex gap-2">
            {feacher.icon}
            <p className="font-bold text-base md:text-lg">{feacher.title}</p>
          </div>
          <div className="w-full">
            <p className="w-full text-center text-sm md:text-base font-medium">
              {feacher.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseFeachers;
