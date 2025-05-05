import styles from '../styles/sepecialArtist.module.css'
import { Row } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/images/slider/9.jpg'
import { SharedButton } from '../styledComponents/SharedButton'
import { SharedSection } from '../shared'
import { VideoModal } from './VideoModal'

export function SpecialArtist() {
    const [ showVideo, setShowVideo ] = useState( false );
    const navigate = useNavigate();

    const handleListenClick = () => {
        setShowVideo( true );
    }

    const handleKnowMoreClick = () => {
        navigate( '/artist?name=farid' );
    }

    return (
        <>
            <SharedSection className={`special_artist`} title={'الفنان المميز اليوم'} titleFormat={'mb-5'}>
                <Row>
                    <div className="col-md-6 p-0">
                        <img src={img1} alt="special artist" className='img-fluid' />
                    </div>
                    <div className={`col-md-6 p-4 ${styles.w_bg}`}>
                        <h4>فريد الاطرش</h4>
                        <p className={`${styles.dateOfBirth}`}>1974-1917</p>
                        <span className={`${styles.badge} mx-1`}>سوريا</span>
                        <span className={`${styles.badge} mx-1`}>العصر الذهبى</span>
                        <p className={`mt-4 ${styles.artistInfo} p-color`}>
                            يعتبر من أعظم المطربين في تاريخ الموسيقى العربية، اشتهر بصوته القوي وأدائه المتميز
                            ترك بصمات واضحة في الموسيقى والغناء العربي ويعد من أعلام الفن وحاصل على قلادة النيل العظمى.
                        </p>
                        <SharedButton onClick={handleKnowMoreClick}>
                            <i className="mx-2 bi bi-person"></i>
                            تعرف عليه
                        </SharedButton>
                        <SharedButton $varient='outline' onClick={handleListenClick}>
                            <i className="mx-2 bi bi-play-fill"></i>
                            استمع الان
                        </SharedButton>
                    </div>
                </Row>
            </SharedSection>
            <VideoModal
                show={showVideo}
                onHide={() => setShowVideo( false )}
                videoId="CZ31w3-Y4n0" // Farid Al Atrash's famous song
            />
        </>
    )
}
