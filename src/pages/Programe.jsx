import { useState, useEffect } from 'react'
import DaySelector from '../components/DaySelector'
import GenreFilter from '../components/GenreFilter'
import ArtistCard from '../components/ArtistCard'
import allArtists from '../data/artists.json'

function Programe () {
const [artists, setArtists] = useState([])
  const [selectedDay, setSelectedDay] = useState('2026-06-19')
  const [activeGenre, setActiveGenre] = useState('Tous')

useEffect(() => {
    setArtists(allArtists)
}, [])

const days = [...new Set(artists.map(a => a.day))].sort()

const genres = ['Tous', ...new Set(artists.map(a => a.genre))]

const filteredArtists = artists.filter(artist => {
    const dayMatch = artist.day === selectedDay
    const genreMatch = activeGenre === 'Tous' || artist.genre === activeGenre
    
    return dayMatch && genreMatch
  })

function handleDaySelect(day){setSelectedDay(day) ('Tous')}
function handleGenreFilter(genre){setActiveGenre(genre)}

return (

<div className="programe">
  <h1 className="page-title">Programe</h1>
  
  
  <DaySelector
  days={days}
  selectedDay={selectedDay}
  onselect={handleDaySelect}/>
  
  
  <GenreFilter genres = {genres}
  activeGenre={activeGenre}
  onFilter={handleGenreFilter}
  />
<p className="programe__count"> {filteredArtists.length} artist {filteredArtists.length !== 1 ? 's' : ''}</p>

<div className="programe__list">
{filteredArtists.length > 0 ? (filteredArtists.map(artist => (
  <ArtistCard key={artist.id} artist={artist} />
))

) :(
<p className="programe__empty">No artists for this filter</p>

)}

</div>

</div>

)


}export default Programe