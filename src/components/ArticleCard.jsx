import React, { useState } from 'react'
import { SharedButton } from '../styledComponents/SharedButton'
import { VideoModal } from './VideoModal'

export function ArticleCard( { imgSrc, description, date, className, name, words, melody, listen, videoId, ...props } ) {
    const [ showVideo, setShowVideo ] = useState( false );

    const handleListenClick = () => {
        setShowVideo( true );
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
                {!listen && <a href="#" className='readMore'>اقرأ المزيد </a>}
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
        </div>
    )
}
