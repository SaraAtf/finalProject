import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { artistsData } from '../models/artistsData';

import { SharedSection } from '../shared'
import { Row, Table } from 'react-bootstrap';
import { ArticleCard } from '../components';

export function Artist() {
    const location = useLocation();
    const params = new URLSearchParams( location.search );
    const artistName = params.get( 'name' )
    const [ searchQuery, setSearchQuery ] = useState( '' );

    const artist = artistsData.find( ( artist ) => artist.englishName == artistName )

    const filteredWorks = artist.works.filter( work =>
        work.name.toLowerCase().includes( searchQuery.toLowerCase() )
    );

    const handleSearch = ( e ) => {
        setSearchQuery( e.target.value );
    }

    return (
        <>
            <SharedSection title={artist.nickName} subTitle={<span>{artist.birthDate}</span>} >
                <Row>
                    <div className="col-sm-8 mt-5">
                        <Table size="sm">
                            <thead>
                                <tr>
                                    <td>الاسم</td>
                                    <td>{artist.name}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>اللقب</td>
                                    <td>{artist.nickName}</td>
                                </tr>
                                <tr>
                                    <td>الوفاه</td>
                                    <td>{artist.deathData}</td>
                                </tr>
                                <tr>
                                    <td>سبب الوفاه</td>
                                    <td>{artist.deathReason}</td>
                                </tr>
                                <tr>
                                    <td> مكان الدفن</td>
                                    <td>{artist.deathLocation}</td>
                                </tr>
                                <tr>
                                    <td> موطنه</td>
                                    <td>{artist.home}</td>
                                </tr>
                                <tr>
                                    <td> المدرسه الام</td>
                                    <td>{artist.school}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-sm-4">
                        <img src={artist.img} style={{ maxHeight: '300px', borderRadius: '5px' }} alt="artist image" className='img-fluid' />
                    </div>
                </Row>
            </SharedSection>
            <SharedSection title={'حياته'} className={'footer text-light'}>
                <SharedSection className='bg-light rounded mt-5'>
                    <p className='p-color'>
                        {artist.life}
                    </p>
                </SharedSection>
            </SharedSection>
            <SharedSection title={'الاعمال الفنيه'} titleFormat={'mb-5'} >
                <div className="d-flex justify-content-center mb-5">
                    <input
                        type="text"
                        name='song'
                        placeholder='ابحث عن اغنيه ... '
                        className='form-control w-50'
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <Row className='g-3'>
                    {filteredWorks.length > 0 ? (
                        filteredWorks.map( work => (
                            <div key={work.id} className="col-md-4">
                                <ArticleCard {...work} listen={true} className={'darkBg text-light'} />
                            </div>
                        ) )
                    ) : (
                        <div className="col-12 text-center">
                            <div className="p-4 darkBg text-light rounded">
                                <h4>لا توجد اغانى مطابقه للبحث</h4>
                                <p className="mb-0">جرب البحث بكلمات اخرى</p>
                            </div>
                        </div>
                    )}
                </Row>
            </SharedSection>
        </>
    )
}
