const listings = [
  {
    id: 201,
    title: "PA/Dry Hill",
    images: [{ fileName: "drytop" }],
    state: "WA",
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Locals Only",
    images: [{ fileName: "firstspot" }],
    categoryId: 1,
    state: "OR",
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Best riding spot in Seattle area",
    description:
      "Its got it all for when you wanna send it",
    images: [
      { fileName: "27" },
      { fileName: "29" },
      
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Kellog",
    images: [{ fileName: "silver" }],
    categoryId: 5,
    state: "ID",
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "White Salmon / Little MOAB",
    images: [{ fileName: "whitesalmon" }],
    state: "OR",
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Big Sky Bike Park",
    images: [{ fileName: "bigsky" }],
    state: "MT",
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Bachelor Camp Spot",
    description: "No rips no stains no odors",
    images: [{ fileName: "bachelor" }],
    categoryId: 1,
    state: "OR",
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Beacon Road Gap West Side",
    images: [{ fileName: "beacon" }],
    categoryId: 5,
    state: "WA",
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 7,
    title: "Ollalie At Night",
    images: [{ fileName: "firstimage" }],
    categoryId: 5,
    state: "WA",
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
