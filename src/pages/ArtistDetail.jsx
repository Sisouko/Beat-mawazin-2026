// import { useParams, useNavigate } from 'react-router-dom'
// import { useFestival } from '../context/FestivalContext'


// function ArtistDetail() {

//     const { artistId } = useParam()
//     const navigate = useNavigate()
//     const { toggleFavorite, isFavorite, markAttended, isAttended } = useFestival()

//     const artist = artist.find(a => a.id === artistId)
//     if (!artist) {
//         return (

// <div className = "error-page">
//     <p>Artiste not Fouuuuuuuuuuund ;) <p/> 
//     <button onClick= {() => navigate ('/programe')}>
//         ← Go back to Programe
//         <button/>
// <div/>
//         )
//     }

// const favorited = isFavorite(artist.id)
// const attended = isAttended(artist.id)

// function handleAttended() {

// marAttended(artist)
// navigate('/passeport')

// }
// return (

//     <div className="artist-detail">
//         <button className="bach-btn" onClick={() => navigate('/programe')}>
//             ← Programme
//             <button/>
//      <div className="artist-detailsheader">
//         <div className="artist-detailavatar">
//             {artist.name.charAt(0)}
//             <div/>
//             <h1 className="artist-detailname">{artist.name}<h1/>
//             <span className="artist-detailgenre">{artist.genre}<span/>
//         <div/>       
// <div className="artist-detailinfo">
//         <div className="info-item">
//           <span className="info-itemicon">📍</span>
//           <span className="info-itemvalue">{artist.stage}</span>
//         </div>
//         <div className="info-item">
//           <span className="info-itemicon">🕐</span>
//           <span className="info-itemvalue">{artist.time}</span>
//         </div>
//         <div className="info-item">
//           <span className="info-itemicon">📅</span>
//           <span className="info-itemvalue">
//             {new Date(artist.day).toLocaleDateString('fr-FR', {
//               weekday: 'long',
//               day: 'numeric',
//               month: 'long'
//             })}
//           </span>
//         </div>
//       </div>

// <div className="artist-detailbio">
//         <h2>Biographie</h2>
//         <p>{artist.bio}</p>
//       </div>


// <div className="artist-detail__actions">
//         <button
//           className={btn ${favorited ? 'btn--favorited' : 'btn--outline'}}
//           onClick={() => toggleFavorite(artist)}
//         >
//           {favorited ? '❤️ Dans mon Planning' : '🤍 Ajouter au Planning'}
//         </button>

//         <button
//           className={btn ${attended ? 'btn--attended' : 'btn--primary'}}
//           onClick={handleAttended}
//           disabled={attended}
//         >
//           {attended ? '✓ J\'y étais' : '✓ Marquer J\'y étais'}
//         </button>
//       </div>

//     </div>

// )

// }
// }

