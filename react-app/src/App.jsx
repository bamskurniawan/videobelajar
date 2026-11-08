
import { useState } from 'react'
import { Link } from 'react-router-dom'
import courses from './data/courses'
import './App.css'

// Navbar
function Navbar() {
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/login'
  }

  return (
    <header className="navbar">
      <a href="/" className="logo">
        videobelajar
      </a>

      <div className="nav-right">
        <a href="#kategori">Kategori</a>

        {user ? (
          <>
            <span>Halo, {user.nama}</span>
            <button onClick={handleLogout} className="register-link">
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/login" className="login-link">Masuk</a>
            <a href="/register" className="register-link">Daftar</a>
          </>
        )}
      </div>
    </header>
  )
}

// Hero
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Revolusi Pembelajaran: Temukan
          Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>

        <p>
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi
          video pembelajaran berkualitas tinggi. Tidak hanya itu,
          Anda juga dapat berpartisipasi dalam latihan interaktif
          yang akan meningkatkan pemahaman Anda.
        </p>

        <a href="#kursus" className="hero-button">
          Temukan Video Course untuk Dipelajari!
        </a>
      </div>
    </section>
  )
}

// Course Card (Reusable Component)
function CourseCard({ course }) {
  return (
    <Link
  to={`/course/${course.id}`}
  className="course-card"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
      <img
        src={course.image}
        alt={course.title}
        className="course-image"
      />

      <div className="course-info">
        <h3>{course.title}</h3>

        <p className="course-description">
          Mulai transformasi dengan instruktur profesional,
          harga yang terjangkau, dan kurikulum terbaik.
        </p>

        <div className="instructor">
          <div className="avatar">
            {course.instructor.charAt(0)}
          </div>

          <div>
            <h4>{course.instructor}</h4>
            <p>{course.role}</p>
          </div>
        </div>

        <div className="course-bottom">
          <span className="rating">
            ⭐⭐⭐☆☆ {course.rating}
          </span>

          <strong>{course.price}</strong>
        </div>
      </div>
    </Link>
  )
}

// Newsletter
function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <span>NEWSLETTER</span>
        <h2>Mau Belajar Lebih Banyak?</h2>

        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru
          dan penawaran spesial dari program-program terbaik.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a href="/" className="logo">videobelajar</a>

        <h4>Gali Potensi Anda Melalui Pembelajaran Video!</h4>
        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
        <p>+62-877-7123-1234</p>
      </div>

      <div className="footer-column">
        <h4>Kategori</h4>
        <p>Digital & Teknologi</p>
        <p>Pemasaran</p>
        <p>Manajemen Bisnis</p>
        <p>Pengembangan Diri</p>
        <p>Desain</p>
      </div>

      <div className="footer-column">
        <h4>Perusahaan</h4>
        <p>Tentang Kami</p>
        <p>FAQ</p>
        <p>Kebijakan Privasi</p>
        <p>Ketentuan Layanan</p>
        <p>Bantuan</p>
      </div>

      <div className="footer-column">
        <h4>Komunitas</h4>
        <p>Tips Sukses</p>
        <p>Blog</p>
      </div>

      <div className="copyright">
        © 2026 Bams Kurniawan All Rights Reserved.
      </div>
    </footer>
  )
}

// Main Homepage
function App() {
  const [activeCategory, setActiveCategory] = useState('Semua Kelas')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'Semua Kelas',
    'Pemasaran',
    'Desain',
    'Pengembangan Diri',
    'Bisnis',
  ]

  const filteredCourses = courses.filter((course) => {
  const matchCategory =
    activeCategory === 'Semua Kelas' ||
    course.category === activeCategory

  const matchSearch =
    course.title.toLowerCase().includes(searchTerm.toLowerCase())

  return matchCategory && matchSearch
})

  return (
    <>
      <Navbar />

      <main className="container">
        <Hero />

        <section className="courses-section" id="kursus">
          <div className="section-heading">
            <h2>Koleksi Video Pembelajaran Unggulan</h2>
            <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
<div className="search-box">
  <input
    type="text"
    placeholder="Cari video pembelajaran..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
          <div className="categories" id="kategori">
  {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
            ))}
          </div>

          <div className="course-grid">
          {filteredCourses.length > 0 ? (
  filteredCourses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ))
) : (
  <p className="empty-message">
    Video pembelajaran tidak ditemukan.
  </p>
)}
        </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default App
