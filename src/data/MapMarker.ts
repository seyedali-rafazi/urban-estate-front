import { LatLngTuple } from "leaflet";

interface MarkerType {
  id: number;
  geocode: LatLngTuple;
}

const markers: MarkerType[] = [
  {
    id: 1,
    geocode: [34.0522, -118.2437], // Downtown Los Angeles
  },
  {
    id: 2,
    geocode: [34.0522, -118.243], // Near Downtown
  },
  {
    id: 3,
    geocode: [34.0701, -118.4441], // Westwood
  },
  {
    id: 4,
    geocode: [34.0778, -118.4455], // UCLA Area
  },
  {
    id: 5,
    geocode: [34.0472, -118.2585], // Near Staples Center
  },
  {
    id: 6,
    geocode: [34.0522, -118.243], // Near LA Live
  },
  {
    id: 7,
    geocode: [34.06, -118.238], // Near USC
  },
  {
    id: 8,
    geocode: [34.0634, -118.4457], // Near Santa Monica
  },
  {
    id: 9,
    geocode: [34.0522, -118.255], // Near LA Convention Center
  },
  {
    id: 10,
    geocode: [34.0467, -118.2614], // Near Echo Park
  },
  {
    id: 11,
    geocode: [34.0652, -118.4452], // Near Beverly Hills
  },
  {
    id: 12,
    geocode: [34.069, -118.4455], // Near Century City
  },
  {
    id: 13,
    geocode: [34.0584, -118.2482], // Near The Grove
  },
  {
    id: 14,
    geocode: [34.0615, -118.4004], // Near Venice Beach
  },
  {
    id: 15,
    geocode: [34.0662, -118.4827], // Near Long Beach
  },
  {
    id: 16,
    geocode: [34.0724, -118.405], // Near Hollywood
  },
  {
    id: 17,
    geocode: [34.0928, -118.3287], // Near Pasadena
  },
  {
    id: 18,
    geocode: [34.0485, -118.2558], // Near Griffith Park
  },
  {
    id: 19,
    geocode: [34.0537, -118.2498], // Near Arts District
  },
  {
    id: 20,
    geocode: [34.062, -118.2566], // Near Little Tokyo
  },
];


export { markers };
