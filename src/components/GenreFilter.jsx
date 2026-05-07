function GenreFilter ({genres, activeGenre, onFilter}) {

return <div className="genre-filter">
{genres.map(genre => (
    <button 
    key ={genre}
    onClick={() => onFilter (genre)}
    className={`genre-pill ${activeGenre === genre ? 'genre-pill--active' : ''}`}
    
    >

{genre}

    </button>
))}


</div>

}export default GenreFilter