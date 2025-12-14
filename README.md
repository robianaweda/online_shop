# 🌙 Ramadhan Mall - Toko Online Kebutuhan Muslim

![Status](https://img.shields.io/badge/status-active-success.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Toko online modern dan dinamis yang menjual berbagai kebutuhan muslim seperti Al-Qur'an, Kitab Hadis, Kitab Fiqih, Sajadah, Sarung, dan aksesori ibadah lainnya.

## ✨ Fitur Utama

- 🎨 **Desain Modern & Responsif** - Tampilan menarik yang optimal di semua perangkat
- 🛒 **Shopping Cart** - Keranjang belanja dengan local storage
- 🔍 **Search & Filter** - Pencarian real-time dan filter kategori
- 📱 **Mobile Friendly** - Fully responsive design
- ⚡ **Fast & Lightweight** - Pure HTML, CSS, JavaScript tanpa framework
- 💾 **Local Storage** - Keranjang tetap tersimpan
- 🎭 **Smooth Animations** - Animasi yang halus dan modern

## 📦 Produk yang Tersedia

- **Al-Qur'an** (4 produk) - Tajwid, Terjemah, Mini, Rainbow
- **Kitab** (5 produk) - Shahih Bukhari, Muslim, Riyadhus Shalihin, Fiqih Sunnah, Bulughul Maram
- **Sajadah** (4 produk) - Turkey Premium, Portable, Anak, Tebal Empuk
- **Pakaian** (5 produk) - Sarung Atlas, Sarung Wadimor, Koko, Gamis, Peci
- **Aksesori** (6 produk) - Tasbih, Jam Adzan, Mukenah, Parfum Arab

**Total: 24 Produk**

## 📥 Cara Download

### Opsi 1: Download ZIP
```
https://github.com/robianaweda/online_shop/archive/refs/heads/claude/ramadhan-mall-store-CzA48.zip
```

### Opsi 2: Clone Repository
```bash
git clone -b claude/ramadhan-mall-store-CzA48 https://github.com/robianaweda/online_shop.git
cd online_shop
```

### Opsi 3: Download Manual
Download file-file berikut:
- [index.html](https://github.com/robianaweda/online_shop/blob/claude/ramadhan-mall-store-CzA48/index.html)
- [styles.css](https://github.com/robianaweda/online_shop/blob/claude/ramadhan-mall-store-CzA48/styles.css)
- [script.js](https://github.com/robianaweda/online_shop/blob/claude/ramadhan-mall-store-CzA48/script.js)

## 🚀 Cara Menjalankan

### 1. Jalankan Lokal (Offline)
Setelah download, cukup buka file `index.html` dengan browser:
- Double click `index.html`, atau
- Klik kanan → Open with → Browser pilihan Anda

### 2. Deploy ke GitHub Pages

1. Push ke repository GitHub Anda
2. Buka **Settings** → **Pages**
3. Source: Pilih branch `claude/ramadhan-mall-store-CzA48`
4. Folder: Pilih `/ (root)`
5. Klik **Save**
6. Tunggu beberapa menit
7. Akses di: `https://[username].github.io/[repository-name]/`

### 3. Deploy ke Platform Lain

**Netlify:**
- Drag & drop folder ke [netlify.com/drop](https://app.netlify.com/drop)

**Vercel:**
```bash
npm i -g vercel
vercel
```

**GitHub Codespaces:**
- Buka di Codespaces
- Run Live Server extension

## 📁 Struktur File

```
online_shop/
│
├── index.html          # Halaman utama
├── styles.css          # Styling dan animasi
├── script.js           # Fungsi dinamis (cart, filter, search)
└── README.md           # Dokumentasi ini
```

## 🎯 Cara Menggunakan Website

1. **Browse Produk**
   - Scroll ke bagian "Produk Kami"
   - Lihat 24 produk yang tersedia

2. **Filter Kategori**
   - Klik kategori yang diinginkan (Al-Qur'an, Kitab, Sajadah, dll)
   - Produk akan difilter otomatis

3. **Pencarian**
   - Gunakan search box di navigation bar
   - Ketik nama produk atau kategori

4. **Tambah ke Keranjang**
   - Klik tombol **+** pada produk
   - Lihat notifikasi "Produk ditambahkan"
   - Counter keranjang akan bertambah

5. **Lihat Keranjang**
   - Klik icon keranjang di navigation
   - Atur jumlah produk (+ / -)
   - Hapus produk jika perlu
   - Lihat total harga

6. **Checkout**
   - Klik tombol **Checkout**
   - Akan muncul ringkasan pesanan

## 🎨 Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan:
  - CSS Grid & Flexbox
  - CSS Variables
  - Animations & Transitions
  - Responsive Design
- **JavaScript (Vanilla)** - Fungsi dinamis:
  - DOM Manipulation
  - Local Storage API
  - Event Handling
  - Dynamic Rendering
- **Font Awesome 6.4.0** - Icons

## 🎨 Kustomisasi

### Mengubah Warna
Edit di `styles.css` bagian `:root`:
```css
:root {
    --primary-color: #2ecc71;      /* Hijau utama */
    --secondary-color: #27ae60;    /* Hijau sekunder */
    --accent-color: #f39c12;       /* Aksen kuning */
    --dark-color: #2c3e50;         /* Warna gelap */
}
```

### Menambah Produk
Edit di `script.js` bagian `products` array:
```javascript
{
    id: 25,
    name: "Nama Produk",
    category: "kategori",
    price: 100000,
    description: "Deskripsi produk",
    icon: "fas fa-icon-name",
    badge: "New"
}
```

### Menambah Kategori
1. Edit HTML - tambahkan button kategori
2. Edit CSS - styling kategori baru
3. Edit JavaScript - tambahkan logic filter

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Opera (Latest)

## 📄 License

Free to use for personal and commercial projects.

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk memudahkan transaksi kebutuhan muslim

## 🤝 Kontribusi

Contributions, issues, and feature requests are welcome!

## ⭐ Support

Jika project ini bermanfaat, berikan ⭐ di GitHub!

---

**Happy Coding! 🚀**

Semoga berkah dan bermanfaat untuk umat Islam 🌙
