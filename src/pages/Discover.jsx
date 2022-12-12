import { SongCard } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { useSelector } from 'react-redux';
import PreviewCard from '../components/PreviewCard';

export default function Discover() {
  const { data } = useGetTopChartsQuery()
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  return (
    <div className='flex flex-col'>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        {data === undefined &&
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((i) => (
              <PreviewCard key={i} />
            ))}
          </>
        }
      </div>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
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
