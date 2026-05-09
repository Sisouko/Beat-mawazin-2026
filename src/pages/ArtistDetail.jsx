import { useParams, useNavigate } from 'react-router-dom'
import { useFestival } from '../context/FestivalContext'

function ArtistDetail() {
  const { artistId } = useParams()
  const navigate = useNavigate()
  const { artists, toggleFavorite, isFavorite, markAttended, isAttended } = useFestival()

  const artist = artists.find(a => a.id === artistId)

  const favorited = isFavorite(artist?.id)
  const attended = isAttended(artist?.id)

  if (!artist) {
    return (
      <div className="error-page">
        <p>Artiste not Found</p>
        <button onClick={() => navigate('/programme')}>
          ← Go back to Programme
        </button>
      </div>
    )
  }

  function handleAttended() {
    markAttended(artist)
    navigate('/passeport')
  }

  return (
    <div className="artist-detail">

      <button className="back-btn" onClick={() => navigate('/programme')}>
        ← Programme
      </button>

      <div className="artist-details-header">
        <div className="artist-detail-avatar">
          {artist.name.charAt(0)}
        </div>
        <h1 className="artist-detail-name">{artist.name}</h1>
        <span className="artist-detail-genre">{artist.genre}</span>
      </div>

      <div className="artist-detail-info">
        <div className="info-item">
          <span className="info-item-icon">📍</span>
          <span className="info-item-value">{artist.stage}</span>
        </div>
        <div className="info-item">
          <span className="info-item-icon">🕐</span>
          <span className="info-item-value">{artist.time}</span>
        </div>
        <div className="info-item">
          <span className="info-item-icon">📅</span>
          <span className="info-item-value">
            {new Date(artist.day).toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long'
            })}
          </span>
        </div>
      </div>

      <div className="artist-detail-bio">
        <h2>Biographie</h2>
        <p>{artist.bio}</p>
      </div>

      <div className="artist-detail__actions">
        <button
          className={`btn ${favorited ? 'btn--favorited' : 'btn--outline'}`}
          onClick={() => toggleFavorite(artist)}
        >
          {favorited ? '❤️ Dans mon Planning' : '🤍 Ajouter au Planning'}
        </button>

        <button
          className={`btn ${attended ? 'btn--attended' : 'btn--primary'}`}
          onClick={handleAttended}
          disabled={attended}
        >
          {attended ? "✓ J'y étais" : "✓ Marquer J'y étais"}
        </button>
      </div>

    </div>
  )
}

export default ArtistDetail