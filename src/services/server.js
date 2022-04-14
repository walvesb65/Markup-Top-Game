const dbjson = require('../data.json');

function getPlatforms() {
  const platforms = new Set(dbjson.map(({ Platform }) => Platform));
  return Array.from(platforms)
}

function getGenres() {
  const genres = new Set(dbjson.map(({ Genre }) => Genre));
  return Array.from(genres)
}

function getPublishers() {
  const publishers = new Set(dbjson.map(({ Publisher }) => Publisher));
  return Array.from(publishers)
}

module.exports = {
  getPlatforms,
  getGenres,
  getPublishers,
}