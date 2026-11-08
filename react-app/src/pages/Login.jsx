
import { useState } from 'react'
import './Login.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const handleForgotPassword = () => {
    const email = prompt('Masukkan email yang terdaftar:')

    if (!email) return

    const user = JSON.parse(localStorage.getItem('registeredUser'))

    if (!user || user.email !== email) {
        alert('Email tidak terdaftar!')
        return
    }

    const newPassword = prompt('Masukkan kata sandi baru:')

    if (!newPassword) return

    if (newPassword.length < 8) {
        alert('Password minimal 8 karakter!')
        return
    }

    user.password = newPassword

    localStorage.setItem('registeredUser', JSON.stringify(user))

    alert('Password berhasil diubah! Silakan login kembali.')
}

  return (
    <div className="auth-page">
      <header className="auth-navbar">
        <a href="/" className="auth-logo">
          videobelajar
        </a>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <h1>Masuk ke Akun</h1>
          <p className="auth-subtitle">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>

          <form onSubmit={(e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const email = formData.get('email')
    const password = formData.get('password')

    const user = JSON.parse(localStorage.getItem('registeredUser'))

    if (!user) {
        alert('Akun belum terdaftar!')
        return
    }

    if (email === user.email && password === user.password) {
    localStorage.setItem('user', JSON.stringify(user))

    alert('Login berhasil! Selamat datang ' + user.nama)
    window.location.href = '/'
    } else {
        alert('Email atau password salah!')
    }
}}>
            <div className="auth-field">
              <label htmlFor="email">
                E-Mail <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                required
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">
                Kata Sandi <span>*</span>
              </label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Tampilkan atau sembunyikan kata sandi"
                >
                  {showPassword ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            <div className="forgot-password">
    <a
        href="#"
        onClick={(e) => {
            e.preventDefault()
            handleForgotPassword()
        }}
    >
        Lupa Password?
    </a>
</div>

            <button type="submit" className="auth-button">
              Masuk
            </button>

            <a href="/register" className="auth-secondary-button">
              Daftar
            </a>

            <div className="auth-divider">
              <span></span>
              <p>atau</p>
              <span></span>
            </div>

            <button
              type="button"
              className="google-button"
              onClick={() => alert('Login Google belum diaktifkan')}
            >
              <strong className="google-icon">G</strong>
              Masuk dengan Google
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
