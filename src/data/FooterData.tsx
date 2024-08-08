import { Instagram, Phone, Telegram } from "../icons/Footer";

interface Content {
  id: number;
  muli: string;
  icon?: JSX.Element;
}

interface FooterData {
  id: number;
  header: string;
  contents: Content[];
}

const FooterConUPDatas: FooterData[] = [
  {
    id: 1,
    header: "Real Estate Markets",
    contents: [
      { id: 1, muli: "Milan Real Estate Market" },
      { id: 2, muli: "London Real Estate Market" },
      { id: 3, muli: "Rome Real Estate Market" },
    ],
  },
  {
    id: 2,
    header: "Top Searches",
    contents: [
      { id: 1, muli: "Apartment Near Metro" },
      { id: 2, muli: "House Near Main Street" },
      { id: 3, muli: "Single-Unit Apartment" },
    ],
  },
  {
    id: 3,
    header: "Top-Rated Real Estate Agents",
    contents: [
      { id: 1, muli: "Mitra Jabari" },
      { id: 2, muli: "Hesameddin Azizi" },
      { id: 3, muli: "Bahram Mashouf" },
    ],
  },
  {
    id: 4,
    header: "Connect With Us",
    contents: [
      { id: 1, muli: "Phone", icon: <Phone /> },
      { id: 2, muli: "Instagram", icon: <Instagram /> },
      { id: 3, muli: "Telegram", icon: <Telegram /> },
    ],
  },
];

const FooterConDownDatas: FooterData[] = [
  {
    id: 1,
    header: "Services",
    contents: [
      { id: 1, muli: "Rent" },
      { id: 2, muli: "Buy" },
      { id: 3, muli: "Post Free Property Ad" },
      { id: 4, muli: "Real Estate" },
      { id: 5, muli: "Real Estate Consultants" },
      { id: 6, muli: "Real Estate News" },
      { id: 7, muli: "Have a Property Question?" },
    ],
  },
  {
    id: 2,
    header: "Information",
    contents: [
      { id: 1, muli: "Download UrbanState App" },
      { id: 2, muli: "Contact Us" },
      { id: 3, muli: "UrbanState Story" },
      { id: 4, muli: "Frequently Asked Questions" },
      { id: 5, muli: "Yek Saghf; UrbanState Blog" },
      { id: 6, muli: "Your Privacy" },
      { id: 7, muli: "Our and Your Commitments" },
    ],
  },
  {
    id: 3,
    header: "User Account",
    contents: [
      { id: 1, muli: "My Profile" },
      { id: 2, muli: "Bookmarked Properties" },
      { id: 3, muli: "My Ads" },
    ],
  },
];

export { FooterConUPDatas, FooterConDownDatas };
