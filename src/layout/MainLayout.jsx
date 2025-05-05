import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SharedLayout } from '../layout/SharedLayout'
import { Artist, Contact, Home, NotFound, Pioneers } from '../pages'
import { Articles } from '../pages/Articles'
export function MainLayout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path='pioneers' element={<Pioneers />} />
                    <Route path='artist' element={<Artist />} />
                    <Route path='articles' element={<Articles />} />
                    <Route path='contact-us' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}
