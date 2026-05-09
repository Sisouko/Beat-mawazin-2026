import { useFestival } from '../context/FestivalContext'
import ArtistCard from '../components/ArtistCard'


function MonPlanning (){
    const { favorites }= useFestival()

const byDay = favorites.reduce((groups, artist) => {
    
    const day = artist.day
    if (!groups[day]) groups[day] = []

    groups[day].push(artist)

    return groups
}, {} )

const sortedDays = Object.keys(byDay).sort()

function formatDate(dateString) {

return new Date(dateString).toLocaleDateString('fr-FR',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    })
}

if (favorites.length === 0) {

    return (

        <div className="planning">
    <h1 className="page-title">My schedule</h1>
    <div className="empty-state"> 
        <p className="empty-state__icon">📅</p>
        <p className="empty-state__text">No artists added</p>
        <p className="empty-state__sub">Browse the lineup and click ❤️ to save concerts</p>
         </div>
</div>
    )
}
    return (

        <div className="planning">

<h1 className="page-title">Mon Planning</h1>
      <p className="planning__count">
        {favorites.length} concert{favorites.length !== 1 ? 's' : ''} sauvegardé{favorites.length !== 1 ? 's' : ''}
      </p>

      
      {sortedDays.map(day => (
        <section key={day} className="planning__day-group">
          <h2 className="planning__day-title">
            {formatDate(day)}
          </h2>
          <div className="planning__day-list">
            {byDay[day].map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>
     
     ))}




        </div>

    )

}export default MonPlanning