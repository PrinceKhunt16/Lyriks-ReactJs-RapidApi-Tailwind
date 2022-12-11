import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
import Discover from './pages/Discover';

export default function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex text-white">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#04044f]">
        <div className={`px-8 pt-8 h-[calc(100vh)] ${activeSong?.title ? "pb-[112px]" : "pb-0" } overflow-y-scroll flex xl:flex-row`}>
          <div className="flex-1 h-fit pb-8">
            <Routes>
              <Route path="/" element={<Discover />} />
            </Routes>
          </div>
        </div>
      </div>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 transition-all left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/5 to-[#1d1d6b] backdrop-blur-2xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}
