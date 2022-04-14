const dbjson = require('../data.json');

function getPlatforms() {
  const platforms = new Set(dbjson.map(({ Platform }) => Platform));
  return Array.from(platforms)
}

module.exports = {
  getPlatforms,
}