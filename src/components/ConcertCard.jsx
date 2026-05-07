import { useNavigate } from 'react-router-dom'
import { useFestival } from '../context/FestivalContext'

function ConcertCard ({concert}){
const navigate = useNavigate()
const {markAttended, isAttended } = useFestival ()

const attended = isAttended(concert.id)

function handleAttended (){

    markAttended(concert)
    navigate('/passeport')
}
return (

<div className="concert-card">
    <div className="concert-card__header">
        <span className="concert-card__genre">{concert.genre}</span>
        <span className="concert-card__time">{concert.time}</span>
</div>

<h2 className="concert-card__name">{concert.name}</h2>
<p className="concert-card__stage">📍 {concert.stage}</p>

<button  className={`btn ${attended ? 'btn--attended' : 'btn--primary'}`}
onClick={handleAttended}
disabled={attended}
>
    {attended ? '✓ J\'y étais déjà' : '✓ J\'y étais'}
</button>
</div>
)


}export default ConcertCard