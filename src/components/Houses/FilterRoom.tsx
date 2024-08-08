import { useEffect } from "react";
import { useQueryContext } from "../../context/QueryStringContext";
import FilterOptions from "./FilterOptions";
import { RoomDetails } from "../../data/FilterData";
import { activeType } from "../../types/indexType";

interface FilterRoomType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<activeType>>;
}

const FilterRoom: React.FC<FilterRoomType> = ({ active, setActive }) => {
  const { queryString, setQueryString } = useQueryContext();

  const handelClick = (e: { id: number; text: string; value: string }) => {
    setActive((prevUser) => ({ ...prevUser, activeRoom: e.id }));
    setQueryString((prevUser) => ({
      ...prevUser,
      rooms: e.value,
    }));
  };

  useEffect(() => {}, [queryString]);

  return (
    <FilterOptions
      headerText="اتاق خواب"
      active={active}
      items={RoomDetails}
      handelClick={handelClick}
    />
  );
};

export default FilterRoom;
