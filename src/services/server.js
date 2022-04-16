const dbjson = require('../data.json');

function getplatforms() {
  const platforms = new Set(dbjson.map(({ platform }) => platform));
  const setCheck = Array.from(platforms).map((e) => ({ platform: e}))
  return setCheck;
}

function getgenres() {
  const genres = new Set(dbjson.map(({ genre }) => genre));
  const setCheck = Array.from(genres).map((e) => ({ genre: e}))
  return setCheck;
}

function getpublishers(value) {
  const publishers = new Set(dbjson.map(({ publisher }) => publisher));
  const setCheck = Array.from(publishers).map((e) => ({ publisher: e}))
  
  if (value) {
    const regexValue = new RegExp(`\\w*${value}\\w*`,'i');
    const test = setCheck.filter(({ publisher }) => regexValue.test(publisher));
    return test
  }
  return setCheck;
}

module.exports = {
  getplatforms,
  getgenres,
  getpublishers,
}