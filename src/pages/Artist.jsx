import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { artistsData } from '../models/artistsData';

import { SharedSection } from '../shared'

export function Artist() {
    const location = useLocation();
    const params = new URLSearchParams( location.search );
    const artistName = params.get( 'name' )

    const artist = artistsData.find( ( artist ) => artist.englishName == artistName )
    console.log( artist )


    console.log( artistName )
    return (

        <SharedSection title={artist.nickName} subTitle={<span>{artist.birthDate}</span>} >

        </SharedSection>
    )
}
