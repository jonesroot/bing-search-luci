# bing-search-luci

**bing-search-luci** adalah modul Node.js sederhana untuk mencari gambar dari Bing menggunakan teknik scraping.

## Fitur

- Mencari gambar dari Bing berdasarkan kata kunci.
- Mendukung jumlah hasil yang dapat disesuaikan.
- Tidak membutuhkan API key.

## Instalasi

```bash
npm install bing-search-luci
```

## Penggunaan

```javascript
const searchBingImages = require("bing-search-luci");

(async () => {
  const images = await searchBingImages("kucing lucu", 5);
  console.log(images);
})();
```

## Hasil

```js
[
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  ...
]
```

## Parameter

| Parameter | Tipe     | Deskripsi                                | Wajib |
|-----------|----------|-------------------------------------------|-------|
| `query`   | `string` | Kata kunci pencarian                      | Ya    |
| `count`   | `number` | Jumlah gambar yang ingin diambil (default: 5) | Tidak |

## Catatan

- Module ini menggunakan teknik scraping HTML dari hasil pencarian Bing. Struktur HTML Bing bisa berubah sewaktu-waktu, yang dapat menyebabkan modul ini berhenti bekerja.
- Gunakan secara bijak dan sesuai dengan terms of service dari Bing.

## Repository

[GitHub - jonesroot/bing-search-luci](https://github.com/jonesroot/bing-search-luci)

## Lisensi

[MIT](./LICENSE)