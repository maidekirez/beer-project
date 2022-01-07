import React from 'react'
import BeerList from './BeerList'
import BeerSearch from './BeerSearch'
import BeerFilters from './filters/BeerFilters'

export default function Beer() {
    return (
        <div>
            <BeerSearch/>
            <BeerFilters/>
            <BeerList/>
        </div>
    )
}
