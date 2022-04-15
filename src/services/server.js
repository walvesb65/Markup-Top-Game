const dbjson = require('../data.json');

function getPlatforms() {
  const platforms = new Set(dbjson.map(({ Platform }) => Platform));
  const setCheck = Array.from(platforms).map((e) => ({Platform: e, key: Math.floor(Date.now() * Math.random()).toString(36) }))
  return setCheck;
}

function getGenres() {
  const genres = new Set(dbjson.map(({ Genre }) => Genre));
  const setCheck = Array.from(genres).map((e) => ({Genre:e, key: Math.floor(Date.now() * Math.random()).toString(36)}))
  return setCheck;
}

function getPublishers() {
  const publishers = new Set(dbjson.map(({ Publisher }) => Publisher));
  const setCheck = Array.from(publishers).map((e) => ({Publisher:e, key: Math.floor(Date.now() * Math.random()).toString(36)}))
  return setCheck;
}

module.exports = {
  getPlatforms,
  getGenres,
  getPublishers,
}