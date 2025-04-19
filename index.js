const axios = require('axios');

/**
 * Mengambil URL gambar acak dari Bing (Asia server).
 * @returns {Promise<string>} URL gambar Bing.
 */
async function bing() {
  try {
    const res = await axios.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=5');
    const bingData = res.data;
    const index = Math.floor(Math.random() * bingData.images.length);
    return `https://cn.bing.com${bingData.images[index].url}`;
  } catch (e) {
    console.error(e);
    return 'Internal server error';
  }
}

/**
 * Mengambil data JSON penuh dari Bing Image Archive.
 * @returns {Promise<Object|string>} Data JSON atau error string.
 */
async function bingjson() {
  try {
    const res = await axios.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=5');
    return res.data;
  } catch (e) {
    console.error(e);
    return 'Internal server error';
  }
}

module.exports = {
  bing,
  bingjson
};
