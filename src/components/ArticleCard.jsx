import React from 'react'

export function ArticleCard( { imgSrc, description, date, ...props } ) {
    return (
        <div className=' articleCard'>
            <img src={imgSrc} className='rounded-top article_img' />
            <div className='p-3 w_bg rounded-bottom'>
                <p className='article_date card_font'>{date}</p>
                <p className='p-color card_font'>{description}</p>
                <a href="#" className='readMore'>اقرأ المزيد </a>

            </div>
        </div>
    )
}
