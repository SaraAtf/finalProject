import React from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'
import { BackToTop } from '../components/BackToTop'

export function SharedLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <BackToTop />
        </>
    )
}
