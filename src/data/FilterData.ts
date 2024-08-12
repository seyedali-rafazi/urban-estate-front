interface FilterTypea {
  id: number;
  text: string;
  value: string;
}

const RoomDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Any Number",
    value: "",
  },
  {
    id: 2,
    text: "No Room",
    value: "0",
  },
  {
    id: 3,
    text: "1",
    value: "1",
  },
  {
    id: 4,
    text: "2",
    value: "2",
  },
  {
    id: 5,
    text: "3",
    value: "3",
  },
];

const ParkingDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Any Number",
    value: "",
  },
  {
    id: 2,
    text: "None",
    value: "0",
  },
  {
    id: 3,
    text: "1",
    value: "1",
  },
  {
    id: 4,
    text: "2",
    value: "2",
  },
];

const WarhouseDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Any Number",
    value: "",
  },
  {
    id: 2,
    text: "None",
    value: "0",
  },
  {
    id: 3,
    text: "1",
    value: "1",
  },
  {
    id: 4,
    text: "2",
    value: "2",
  },
];

const BathroomDetails: FilterTypea[] = [
  {
    id: 1,
    text: "1",
    value: "1",
  },
  {
    id: 2,
    text: "2",
    value: "2",
  },
  {
    id: 3,
    text: "3",
    value: "3",
  },
];

const BathroomTypeDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Doesn't Matter",
    value: "",
  },
  {
    id: 2,
    text: "Iranian",
    value: "Iranian",
  },
  {
    id: 3,
    text: "Western",
    value: "Western",
  },
];

const FilterElevatorDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Doesn't Matter",
    value: "",
  },
  {
    id: 2,
    text: "1",
    value: "1",
  },
  {
    id: 3,
    text: "2",
    value: "2",
  },
];

const FloorDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Doesn't Matter",
    value: "",
  },
  {
    id: 2,
    text: "Ground Floor",
    value: "0",
  },
  {
    id: 3,
    text: "1",
    value: "1",
  },
  {
    id: 4,
    text: "2",
    value: "2",
  },
  {
    id: 5,
    text: "3",
    value: "3",
  },
];

const CollingSystemDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Doesn't Matter",
    value: "",
  },
  {
    id: 2,
    text: "Evaporative Cooler",
    value: "Evaporative Cooler",
  },
  {
    id: 3,
    text: "Split AC",
    value: "Split AC",
  },
  {
    id: 4,
    text: "Chiller",
    value: "Chiller",
  },
];

const HeatingSystemDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Doesn't Matter",
    value: "",
  },
  {
    id: 2,
    text: "Central",
    value: "Central",
  },
  {
    id: 3,
    text: "Split AC",
    value: "Split AC",
  },
  {
    id: 4,
    text: "Fireplace",
    value: "Fireplace",
  },
  {
    id: 5,
    text: "Radiator",
    value: "Radiator",
  },
];

const FloorMaterialDetails: FilterTypea[] = [
  {
    id: 1,
    text: "Doesn't Matter",
    value: "",
  },
  {
    id: 2,
    text: "Stone",
    value: "Stone",
  },
  {
    id: 3,
    text: "Ceramic",
    value: "Ceramic",
  },
  {
    id: 4,
    text: "Laminate",
    value: "Laminate",
  },
  {
    id: 5,
    text: "Wood",
    value: "Wood",
  },
];

export {
  RoomDetails,
  ParkingDetails,
  WarhouseDetails,
  BathroomDetails,
  BathroomTypeDetails,
  FilterElevatorDetails,
  FloorDetails,
  CollingSystemDetails,
  HeatingSystemDetails,
  FloorMaterialDetails,
};
