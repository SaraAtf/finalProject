import React from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'

export function SharedLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
