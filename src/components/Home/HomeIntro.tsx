import HomeSearchBox from "./HomeSearchBox";

const HomeIntro: React.FC = () => {
  return (
    <div className="bg-cover bg-home-introduction bg-center h-[580px] w-full mx-auto bg-cyan-100 flex flex-col pb-24 justify-end items-center gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-bold text-3xl xl:text-5xl text-white">
          Elevating Urban Living.
        </h1>
        <h2 className="text-center font-bold text-lg xl:text-2xl text-white">
          Unlock Your City’s Potential with UrbanState.
        </h2>
      </div>
      <HomeSearchBox />
    </div>
  );
};

export default HomeIntro;
