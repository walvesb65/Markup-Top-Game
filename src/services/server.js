const dbjson = require('../data.json');

function getplatforms() {
  const platforms = new Set(dbjson.map(({ platform }) => platform));
  const setCheck = Array.from(platforms).map((e) => ({platform: e, key: Math.floor(Date.now() * Math.random()).toString(36) }))
  return setCheck;
}

function getgenres() {
  const genres = new Set(dbjson.map(({ genre }) => genre));
  const setCheck = Array.from(genres).map((e) => ({genre:e, key: Math.floor(Date.now() * Math.random()).toString(36)}))
  return setCheck;
}

function getpublishers() {
  const publishers = new Set(dbjson.map(({ publisher }) => publisher));
  const setCheck = Array.from(publishers).map((e) => ({publisher:e, key: Math.floor(Date.now() * Math.random()).toString(36)}))
  return setCheck;
}

module.exports = {
  getplatforms,
  getgenres,
  getpublishers,
}