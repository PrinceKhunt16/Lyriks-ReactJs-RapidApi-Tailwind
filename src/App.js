import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import TopPlay from './components/TopPlay';
import AroundYou from './pages/AroundYou';
import ArtistDetails from './pages/ArtistDetails';
import Discover from './pages/Discover';
import Search from './pages/Search';
import SongDetails from './pages/SongDetails';
import TopArtists from './pages/TopArtists';
import TopCharts from './pages/TopCharts';

export default function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex text-white">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#04044f]">
        <SearchBar />
        <div className={`px-6 h-[calc(100vh)] ${activeSong?.title ? "pb-[112px]" : "pb-0" } overflow-y-scroll flex xl:flex-row`}>
          <div className="flex-1 h-fit pb-8">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/5 to-[#1d1d6b] backdrop-blur-2xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}
