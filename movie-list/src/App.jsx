import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';

function App() {


  return (
    <main className='flex overflow-hidden min-h-screen w-full bg-[#1B1B1B]'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/top-rated" element={<TopRatedPage />} />
        <Route exact path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </main>
  )
}

export default App
