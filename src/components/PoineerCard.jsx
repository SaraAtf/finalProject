import { useNavigate } from 'react-router-dom'
import { SharedButton } from '../styledComponents/SharedButton'
import styles from '../styles/sepecialArtist.module.css'
import { useState } from 'react'
import { VideoModal } from './VideoModal'

export function PoineerCard( { name, description, age, country, imgSrc, date, englishName, videoId, ...props } ) {
    const navigate = useNavigate();
    const [ showVideo, setShowVideo ] = useState( false );

    const gotToArtistPage = () => {
        navigate( `/artist?name=${englishName}` )
    }

    const handleListenClick = () => {
        setShowVideo( true );
    }

    return (
        <div className={`col-md-6 g-3`}>
            <div className={`p-4 ${styles.w_bg}`}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>{name} </h4>
                        <p className={`${styles.dateOfBirth}`}>{date}</p>
                    </div>
                    <img src={imgSrc} alt="" className='artist_profile_img' />
                </div>
                <span className={`${styles.badge} mx-1`}>{country}</span>
                <span className={`${styles.badge} mx-1`}>{age}</span>
                <p className={`mt-4 ${styles.artistInfo} p-color`}>{description}</p>
                <SharedButton onClick={gotToArtistPage}>
                    <i className="mx-2 bi bi-person"></i>
                    تعرف عليه
                </SharedButton>
                <SharedButton $varient='outline' onClick={handleListenClick}>
                    <i className="mx-2 bi bi-play-fill"></i>
                    استمع الان
                </SharedButton>
            </div>
            <VideoModal
                show={showVideo}
                onHide={() => setShowVideo( false )}
                videoId={videoId}
            />
        </div>
    )
}
