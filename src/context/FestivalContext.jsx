/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react'

const FestivalContext = createContext ()


export function FestivalProvider({children}){

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('beat-favorites');
        return saved ? JSON.parse(saved) : [];
    })
    const [passeport, setPasseport] = useState(() => {
        const saved = localStorage.getItem('beat-passeport');
        return saved ? JSON.parse(saved) : [];
    })

useEffect (() => {
    localStorage.setItem('beat-favorites', JSON.stringify(favorites))
}, [favorites])

useEffect (() => {
    localStorage.setItem('beat-passeport', JSON.stringify(passeport))
}, [passeport])

function toggleFavorites(artist){
    setFavorites(prev => {
        const alreadySaved = prev.some(a => a.id === artist.id)
    if (alreadySaved) {
        return prev.filter(a => a.id != artist.id)
    } else {
        return [...prev, artist]
    }
    })
}

function markAttended(artist) {
    setPasseport(prev => {
        const alreadyThere = prev.some(a => a.id === artist.id)
       if (alreadyThere) return prev
       return [...prev, artist]
    })
}

function isFavorite(artistId){
    return favorites.some(a => a.id === artistId)
}

function isAttended(artistId) {
    return passeport.some(a => a.id === artistId)
}

return (

    <FestivalContext.Provider value={{
      favorites,
      passeport,
      toggleFavorites,
      markAttended,
      isFavorite,
      isAttended
    }}>
    {children}
    </FestivalContext.Provider>


)
}

export function useFestival () {
    return useContext (FestivalContext)
}

