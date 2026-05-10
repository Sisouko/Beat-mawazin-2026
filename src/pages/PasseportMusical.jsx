import { useState } from 'react'
import { useFestival } from '../context/FestivalContext'
import GenreFilter from '../components/GenreFilter'

function PasseportMusical() {
  const { passeport } = useFestival()
  const [activeGenre, setActiveGenre] = useState('Tous')

  const genres = ['Tous', ...new Set(passeport.map(a => a.genre))]

  const filtered = passeport.filter(concert => {
    return activeGenre === 'Tous' || concert.genre === activeGenre
  })

  if (passeport.length === 0) {
    return (
      <div className="passeport">
        <h1 className="page-title">Mon Passeport 🎫</h1>
        <div className="empty-state">
          <p className="empty-state__icon">🎫</p>
          <p className="empty-state__text">Aucun concert enregistré</p>
          <p className="empty-state__sub">
            Marque "J'y étais" sur les concerts que tu as vécus
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="passeport">
      <h1 className="page-title">Mon Passeport 🎫</h1>

      {/* Summary stat */}
      <div className="passeport__stat">
        <span className="passeport__count">{passeport.length}</span>
        <span className="passeport__label">concerts vécus</span>
      </div>

      {/* Genre filter */}
      <GenreFilter
        genres={genres}
        activeGenre={activeGenre}
        onFilter={setActiveGenre}
      />

      {/* Concert stamps grid */}
      <div className="passeport__grid">
        {filtered.map(concert => (
          <div key={concert.id} className="ticket-stub">
            <div className="ticket-stub__stamp">✓</div>
            <h3 className="ticket-stub__name">{concert.name}</h3>
            <p className="ticket-stub__genre">{concert.genre}</p>
            <p className="ticket-stub__stage">{concert.stage}</p>
            <p className="ticket-stub__date">
              {new Date(concert.day).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'short'
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PasseportMusical