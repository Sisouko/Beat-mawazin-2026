import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Programe from './pages/Programe'
import ArtistDetail from './pages/ArtistDetail'
import MonPlanning from './pages/MonPlanning'
import PasseportMusical from './pages/PasseportMusical'
import Navbar from './components/Navbar'
function App() {

return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="programe" element={<Programe />} />
        <Route path="programe/:artistId" element={<ArtistDetail />} />
        <Route path="planning" element={<MonPlanning />} />
        <Route path="passeport" element={<PasseportMusical />} />
        <Route path="stages" element={<stages />} />
        <Route path="link" element={<link />} />
        <Route path="useState" element={<useState />} />
        </Route>
    </Routes>
    </BrowserRouter>

)

}
export default App