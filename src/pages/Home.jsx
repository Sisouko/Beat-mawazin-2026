import { Link } from 'react-router-dom'
import artist from '../data/artists.json'
import ConcertCard from '../components/ConcertCard'



function Home (){
const featuredConcert = artist.find(a => a.day ==='2026-06-19')

const festivalDates = {
    start: '19 Juin',
    end: '27 Juin',
    year: '2026',
    city: 'Rabat, Morocco',
}
const totalArtist = artist.length
const stages = [...new Set(artist.map(a => a.stage))]

return (

<div className="home">
<section className="home__hero">
<div className="home__hero-content">
    <p className="home__edition">21ème Édition</p>
    <h1 className="home__title">Mawazin</h1>
          <p className="home__subtitle">Rythmes du Monde</p>
          <p className="home__dates">
            {festivalDates.start} — {festivalDates.end} {festivalDates.year}
          </p>
          <p className="home__city">{festivalDates.city}</p>
</div>
</section>

<section className="home__stats">
    <div className="stat">
        <span className="stat__number">{stages.length}</span>
        <span className="stat__label">Scenes</span>
    </div>
    <div className="stat">
        <span className="stat__number">{totalArtist}</span>
        <span className="stat__label">Artist</span>
    </div>
</section>
<section className="home__featured">
    <h2 className="section_title">🌟 Ce Soir à l'Affiche</h2>
    {featuredConcert && (<ConcertCard concert={featuredConcert}/>)}
</section>
<section className="home__cta">
<Link to="/programe" className="btn btn--primary btn--large">Voir tout le Programme →</Link>
</section>
</div>

)

}export default Home