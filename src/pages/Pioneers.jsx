import React from 'react'
import { SharedSection } from '../shared'
import { Row } from 'react-bootstrap'
import { PoineerCard } from '../components'
import { poineer } from '../models/pioneers'

export function Pioneers() {
    return (
        <SharedSection className={`special_artist`} title={`الرواد`} titleFormat={'mb-5 text-center'}>
            <Row className='g-1'>

                {poineer.map( poineer => (
                    <PoineerCard key={poineer.id} {...poineer} />
                ) )}
            </Row>
        </SharedSection>

    )
}
