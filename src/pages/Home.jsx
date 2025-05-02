import React from 'react'
import { MostPopular, Slider, SpecialArtist } from '../components'
import { FinalArticles } from '../components/FinalArticles'

export function Home() {
    return (
        <>
            <Slider />
            <SpecialArtist />
            <MostPopular />
            <FinalArticles />
        </>
    )
}
