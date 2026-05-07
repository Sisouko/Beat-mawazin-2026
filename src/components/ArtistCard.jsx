import { useNavigate } from 'react-router-dom'
import { useFestival } from '../context/FestivalContext'

function ArtistCard ({artist}) {
    const navigate = useNavigate()
    const { toggleFavorite, isFavorite } = useFestival()
const favorited = isFavorite(artist.id)


function handleCardClick (){

    navigate(`/programe/${artist.id}`)
}

function handleFavoriteClick(event) {
event.stopPropagation ()
toggleFavorite(artist)
}
return (
<div className="artist-card" onClick={handleCardClick}>
<div className="artist-card__info">
<h3 className="artist-card__name">{artist.name}</h3>
<p className="artist-card__stage">📍 {artist.stage}</p>
<p className="artist-card__time">🕐 {artist.time}</p>
<span className="artist-card__genre">{artist.genre}</span>

</div>

<button className={`favorite-btn ${favorited ? 'favorite-btn--active' : ''}`}
onClick={handleFavoriteClick}
aria-label={favorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
>

{favorited ? '❤️' : '🤍'}

</button>

</div>

)
}export default ArtistCard