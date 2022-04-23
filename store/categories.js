const categories = [
  {
    id: 1,
    name: "Spring",
    // icon: "weather-sunset",
    backgroundColor: "yellow",
    color: "white"
  },
  {
    id: 2,
    name: "Summer",
    // icon: "weather-sunny",
    backgroundColor: "blue",
    color: "white"
  },
  {
    id: 3,
    name: "Fall",
    // icon: "leaf-maple",
    backgroundColor: "darkred",
    color: "white"
  },
  {
    id: 4,
    name: "Winter",
    // icon: "snowflake",
    backgroundColor: "grey",
    color: "white"
  }

];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
