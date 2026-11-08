
import { useParams, Link } from 'react-router-dom'
import courses from '../data/courses'
import './CourseLearning.css'

function CourseLearning() {
  const { id } = useParams()

  const course = courses.find(
    (item) => item.id === Number(id)
  )

  if (!course) {
    return (
      <div className="learning-container">
        <h2>Kursus tidak ditemukan.</h2>
        <Link to="/">Kembali ke Homepage</Link>
      </div>
    )
  }

  return (
    <main className="learning-container">
      <Link
        to={`/course/${course.id}`}
        className="learning-back"
      >
        ← Kembali ke Detail Kursus
      </Link>

      <h1>{course.title}</h1>

      <p className="learning-instructor">
        Instruktur: {course.instructor}
      </p>

      <div className="video-wrapper">
        {course.videoUrl ? (
          <iframe
            src={course.videoUrl}
            title={course.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p>Video pembelajaran belum tersedia.</p>
        )}
      </div>

      <section className="learning-material">
        <h2>Deskripsi Pembelajaran</h2>
        <p>{course.description}</p>

        <h3>Informasi Kursus</h3>
        <p>Instruktur: {course.instructor}</p>
        <p>Kategori: {course.category}</p>
        <p>Rating: {course.rating}</p>
      </section>
    </main>
  )
}

export default CourseLearning
