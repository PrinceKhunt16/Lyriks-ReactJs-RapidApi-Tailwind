import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constans'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { useSelector } from 'react-redux';

export default function Discover() {
  const { data } = useGetTopChartsQuery()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const genereTitle = 'Pop'

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-normal font-noto text-3xl text-white text-left'>Discover {genereTitle}</h2>
        <select
          onChange={() => {}}
          value={''}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => 
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          )}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  )
}
