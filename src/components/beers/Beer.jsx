import React from 'react'
import BeerFilters from './BeerFilters'
import BeerList from './BeerList'
import BeerSearch from './BeerSearch'

export default function Beer() {
    return (
        <div>
            <BeerSearch/>
            <BeerFilters/>
            <BeerList/>
        </div>
    )
}
