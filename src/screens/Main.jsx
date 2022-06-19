import React from 'react'
import { Outlet } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'

export const Main = () => {
    return (
        <React.Fragment>
            <SearchBar />
            <Outlet/>
        </React.Fragment>
    )
}
