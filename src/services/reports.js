const dbjson = require('../data.json');

function filterBy(filter) {
  const type = Object.keys(filter);
  return dbjson.filter((data) => {
    switch (type.length) {
      case 1:
        return filter[type[0]].includes(data[type[0]]);
      case 2:
        return (
          filter[type[0]].includes(data[type[0]])
          && filter[type[1]].includes(data[type[1]])
        )
      case 3:
          return (
            filter[type[0]].includes(data[type[0]])
            && filter[type[1]].includes(data[type[1]])
            && filter[type[2]].includes(data[type[2]])
          )
      default:
        return data;
    }
  })
}

module.exports = {
  filterBy,
}
