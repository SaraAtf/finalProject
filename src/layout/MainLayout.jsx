import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SharedLayout } from '../layout/SharedLayout'
import { Home, NotFound } from '../pages'
export function MainLayout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}
