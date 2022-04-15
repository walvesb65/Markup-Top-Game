const dbjson = require('../data.json');

function filterData(filterOptions) {
  const types = Object.keys(filterOptions)
    .filter((type) => filterOptions[type].length > 0);
  return dbjson.filter((data) => {
    switch (types.length) {
      case 1:
        return filterOptions[types[0]].includes(data[types[0]]);
      case 2:
        return (
          filterOptions[types[0]].includes(data[types[0]])
          && filterOptions[types[1]].includes(data[types[1]])
        )
      case 3:
          return (
            filterOptions[types[0]].includes(data[types[0]])
            && filterOptions[types[1]].includes(data[types[1]])
            && filterOptions[types[2]].includes(data[types[2]])
          )
      default:
        return data;
    }
  })
}

module.exports = {
  filterData,
}
