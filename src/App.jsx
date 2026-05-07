import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Programme from './pages/Programme'
import ArtistDetail from './pages/ArtistDetail'
import MonPlanning from './pages/MonPlanning'
import PasseportMusical from './pages/PasseportMusical'

function App() {

return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="programme" element={<Programme />} />
        <Route path="programme/:artistId" element={<ArtistDetail />} />
        <Route path="planning" element={<MonPlanning />} />
        <Route path="passeport" element={<PasseportMusical />} />
        </Route>
    </Routes>
    </BrowserRouter>

)

}
export default App