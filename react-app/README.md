
# VideoBelajar — React JS

VideoBelajar adalah aplikasi website pembelajaran berbasis video yang dikembangkan menggunakan React JS dan Vite.

Project ini dibuat sebagai tugas pengembangan website frontend dengan mengimplementasikan desain dari Figma.

Website dirancang agar responsif, mudah digunakan, dan memiliki komponen React yang dapat digunakan kembali (reusable component).

## Website Online

https://videobelajar-rouge.vercel.app

## Repository GitHub

https://github.com/bamskurniawan/videobelajar

## Fitur Aplikasi

### 1. Homepage
- Hero banner pembelajaran
- Daftar kursus pembelajaran
- Kategori kursus
- Pencarian kursus
- Newsletter
- Footer

### 2. Register
- Form pendaftaran pengguna
- Validasi input wajib
- Validasi password minimal 8 karakter
- Validasi konfirmasi password
- Simulasi penyimpanan akun menggunakan localStorage

### 3. Login
- Login menggunakan akun yang didaftarkan
- Validasi email dan password
- Menampilkan nama pengguna setelah login
- Simulasi fitur lupa password

### 4. Logout dan Protected Route
- Logout pengguna
- Pengalihan ke halaman Login
- Membatasi akses halaman tertentu ketika belum login

### 5. Detail Kursus
- Informasi kursus
- Nama instruktur
- Deskripsi pembelajaran
- Rating dan harga kursus
- Tombol Mulai Belajar

### 6. Pemutar Video
- Pemutar video YouTube
- Informasi materi pembelajaran
- Navigasi kembali ke detail kursus

## Teknologi yang Digunakan

- React JS
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Git dan GitHub
- Vercel

## Struktur Folder

```text
react-app/
├── public/
├── src/
│   ├── assets/
│   ├── data/
│   │   └── courses.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Register.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── CourseDetail.css
│   │   ├── CourseLearning.jsx
│   │   └── CourseLearning.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Cara Menjalankan Project

Pastikan Node.js dan npm sudah terinstal.

### 1. Clone Repository

```bash
git clone https://github.com/bamskurniawan/videobelajar.git
```

### 2. Masuk ke Folder React

```bash
cd videobelajar/react-app
```

### 3. Instal Dependencies

```bash
npm install
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka alamat yang ditampilkan Vite pada terminal, biasanya:

http://localhost:5173/

### 5. Build Production

```bash
npm run build
```

## Responsive Design

Website VideoBelajar menggunakan CSS Media Queries untuk menyesuaikan tampilan pada desktop, tablet, dan smartphone.

## Referensi Desain

Desain antarmuka mengacu pada mockup VideoBelajar di Figma yang disediakan sebagai referensi pengerjaan tugas.

## Catatan Keamanan

Fitur registrasi, login, dan lupa password masih berupa simulasi frontend menggunakan localStorage.

Data akun hanya tersimpan secara lokal di browser pengguna. Project ini belum menggunakan backend, database, ataupun sistem autentikasi produksi.

Jangan menggunakan password pribadi atau data sensitif pada aplikasi demo.

## Status Project

- React production build berhasil
- Repository tersedia di GitHub
- Website berhasil di-deploy ke Vercel
- Fitur utama telah diuji

## Pengembang

Bams Kurniawan

© 2026 VideoBelajar.
