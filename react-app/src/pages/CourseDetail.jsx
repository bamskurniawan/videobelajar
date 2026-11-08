
import { useParams, Link } from 'react-router-dom'
import courses from '../data/courses'
import './CourseDetail.css'


function CourseDetail() {
  const { id } = useParams()

  const course = courses.find(
    (item) => item.id === Number(id)
  )

  if (!course) {
    return (
      <div className="detail-container">
        <h2>Kursus tidak ditemukan.</h2>
        <Link to="/">Kembali ke Homepage</Link>
      </div>
    )
  }

  return (
    <main className="detail-container">
      <Link to="/" className="back-link">
        ← Kembali ke Homepage
      </Link>

      <div className="detail-card">
        <img
          src={course.image}
          alt={course.title}
          className="detail-image"
        />

        <div className="detail-content">
          <span className="detail-label">
            VIDEO PEMBELAJARAN
          </span>

          <h1>{course.title}</h1>

          <p className="detail-description">
            {course.description}
          </p>

          <div className="detail-instructor">
            <strong>{course.instructor}</strong>
            <p>{course.role}</p>
          </div>

          <div className="detail-rating">
            ⭐⭐⭐☆☆ {course.rating}
          </div>

          <h2 className="detail-price">
            {course.price}
          </h2>

          <button
  className="start-learning-button"
  onClick={() => {
    if (course.videoUrl) {
      window.location.href = `/course/${course.id}/learn`
    } else {
      alert('Video pembelajaran belum tersedia!')
    }
  }}
>
  Mulai Belajar
</button>
        </div>
      </div>
    </main>
  )
}

export default CourseDetail
