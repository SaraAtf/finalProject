import styles from '../styles/sepecialArtist.module.css'
import { Row } from 'react-bootstrap'

import img1 from '../assets/images/slider/9.jpg'
import { SharedButton } from '../styledComponents/SharedButton'
import { SharedSection } from '../shared'
export function SpecialArtist() {
    return (
        <>

            <SharedSection className={`${styles.special_artist}`} title={'الفنان المميز اليوم'} titleFormat={'mb-5'}>
                <Row>
                    <div className="col-md-6 p-0">
                        <img src={img1} alt="special artist" className='img-fluid' />
                    </div>
                    <div className={`col-md-6 p-4 ${styles.w_bg}`}>

                        <h4>فريد الاطرش</h4>
                        <p className={`${styles.dateOfBirth}`}>1974-1917</p>
                        <span className={`${styles.badge} mx-1`}>سوريا</span>
                        <span className={`${styles.badge} mx-1`}>العصر الذهبى</span>
                        <p className={`mt-4 ${styles.artistInfo}`}
                        >يعتبر من أعظم المطربين في تاريخ الموسيقى العربية، اشتهر بصوته القوي وأدائه المتميز
                            ترك بصمات واضحة في الموسيقى والغناء العربي ويعد من أعلام الفن وحاصل على قلادة النيل العظمى.
                        </p>
                        <SharedButton >
                            <i className="mx-2 bi bi-person"></i>
                            تعرف عليه
                        </SharedButton>
                        <SharedButton varient='outline'>
                            <i className="mx-2 bi bi-play-fill"></i>
                            استمع الان
                        </SharedButton>
                    </div>
                </Row>
            </SharedSection>
            {/* <div className={`${styles.special_artist} p-5`}>
                <Container>
                    <h2 className='mb-5'>الفنان المميز اليوم</h2>
                    <Row>
                        <div className="col-sm-6 p-0">
                            <img src={img1} alt="special artist" className='img-fluid' />
                        </div>
                        <div className={`col-md-6 p-4 ${styles.w_bg}`}>

                            <h4>فريد الاطرش</h4>
                            <p className={`${styles.dateOfBirth}`}>1974-1917</p>
                            <span className={`${styles.badge} mx-1`}>سوريا</span>
                            <span className={`${styles.badge} mx-1`}>العصر الذهبى</span>
                            <p className={`mt-4 ${styles.artistInfo}`}
                            >يعتبر من أعظم المطربين في تاريخ الموسيقى العربية، اشتهر بصوته القوي وأدائه المتميز
                                ترك بصمات واضحة في الموسيقى والغناء العربي ويعد من أعلام الفن وحاصل على قلادة النيل العظمى.
                            </p>
                            <SharedButton >
                                <i className="mx-2 bi bi-person"></i>
                                تعرف عليه
                            </SharedButton>
                            <SharedButton varient='outline'>
                                <i className="mx-2 bi bi-play-fill"></i>
                                استمع الان
                            </SharedButton>
                        </div>
                    </Row>
                </Container>
            </div > */}
        </>

    )
}
