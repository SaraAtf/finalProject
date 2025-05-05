import React, { useState } from 'react'
import { SharedButton } from '../styledComponents/SharedButton'
import { VideoModal } from './VideoModal'
import { Modal } from 'react-bootstrap'
import styles from '../styles/articles.module.css'

export function ArticleCard( { imgSrc, description, date, className, name, words, melody, listen, videoId, ...props } ) {
    const [ showVideo, setShowVideo ] = useState( false );
    const [ showArticle, setShowArticle ] = useState( false );

    const handleListenClick = () => {
        setShowVideo( true );
    }

    const handleReadMoreClick = () => {
        setShowArticle( true );
    }

    return (
        <div className=' articleCard'>
            <img src={imgSrc} className='rounded-top article_img' />
            <div className={`p-3 rounded-bottom ${className}`}>
                {date && <p className='article_date card_font'>{date}</p>}
                {name && <h5>{name}</h5>}
                {description && <p className='p-color card_font'>{description}</p>}
                {words && <p >كلمات <strong>{words}</strong></p>}
                {melody && <p >الحان <strong>{melody}</strong></p>}
                {!listen && <a href="#" className='readMore' onClick={handleReadMoreClick}>اقرأ المزيد </a>}
                {
                    listen &&
                    <div>
                        <SharedButton $varient='outline' className='d-block' onClick={handleListenClick}>
                            <i className="mx-2 bi bi-play-fill"></i>
                            استمع الان
                        </SharedButton>
                    </div>
                }
            </div>
            <VideoModal
                show={showVideo}
                onHide={() => setShowVideo( false )}
                videoId={videoId}
            />
            <Modal show={showArticle} onHide={() => setShowArticle( false )} size="lg" centered className={styles.modal}>
                <div className={styles.modalCloseBtn} onClick={() => setShowArticle( false )}>
                    <i className="bi bi-x-lg"></i>
                </div>
                <Modal.Body className="p-0">
                    <div className={styles.modalContentWrapper}>
                        <div className="text-center">
                            <img
                                src={imgSrc}
                                alt={name}
                                className={styles.modalImage}
                            />
                        </div>
                        <div className={styles.modalTextContent}>
                            <h2 className={styles.modalTitle}>{name}</h2>
                            <div className="d-flex justify-content-between mb-4">
                                <span className={styles.modalDate}>{date}</span>
                            </div>
                            <div className={styles.modalContent}>
                                {description}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
