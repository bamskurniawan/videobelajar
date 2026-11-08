import { Link } from 'react-router-dom'
import './Login.css'

function Register() {
  const handleRegister = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const password = formData.get('password')
  const konfirmasiPassword = formData.get('konfirmasiPassword')

  if (password !== konfirmasiPassword) {
    alert('Konfirmasi kata sandi tidak sama!')
    return
  }

  const user = {
  nama: formData.get('nama'),
  email: formData.get('email'),
  password: password
}

localStorage.setItem('registeredUser', JSON.stringify(user))

  alert('Pendaftaran berhasil!')
}

  return (
    <>
      <header className="auth-navbar">
        <a href="/" className="auth-logo">
          videobelajar
        </a>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <h1>Buat Akun</h1>
          <p>Yuk, mulai perjalanan belajarmu!</p>

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Nama Lengkap *</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>

            <div className="form-group">
              <label>E-Mail *</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email"
                required
              />
            </div>

            <div className="form-group">
              <label>Kata Sandi *</label>
              <input
                type="password"
                name="password"
                placeholder="Buat kata sandi"
                minLength={8}
                required
              />
            </div>

            <div className="form-group">
              <label>Konfirmasi Kata Sandi *</label>
              <input
                type="password"
                name="konfirmasiPassword"
                placeholder="Ulangi kata sandi"
                required
              />
            </div>

            <button type="submit" className="auth-button">
              Daftar
            </button>

            <p>
              Sudah punya akun?{' '}
              <Link to="/login">Masuk</Link>
            </p>
          </form>
        </div>
      </main>
    </>
  )
}

export default Register