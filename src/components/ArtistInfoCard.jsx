
import styles from '../styles/mostPopular.module.css'
export function ArtistInfoCard( { name, imgSrc, country, ...props } ) {
    return (
        <div>
            <img src={imgSrc} className={`${styles.artist_img}`} alt="om kolthom img" />
            <div className='p-2 text-center mt-3'>
                <h6>{name}</h6>
                <span style={{ fontSize: '0.8rem' }} className='p-color'>{country}</span>
            </div>
        </div>
    )
}
