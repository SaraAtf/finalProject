
import { artists } from '../models/artistsList'
import { SharedSection } from '../shared'
import { ArtistInfoCard } from './ArtistInfoCard'

export function MostPopular() {
    return (
        <SharedSection title={'الاكثر شهره'} titleFormat={'mb-5'}>
            <div className='artists d-flex justify-content-between flex-wrap'>
                {artists.map( ( artist ) => <ArtistInfoCard key={artist.id} {...artist} /> )}
            </div>
        </SharedSection>
    )
}
