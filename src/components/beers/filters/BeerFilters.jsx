import React from 'react';

import VolumeFilter from './VolumeFilter';
import PhFilter from './PhFilter';
import SrmFilter from './SrmFilter';

export default function BeerFilters() {


    return (
        <div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-12">
                        <VolumeFilter />
                    </div>
                    <div className="col-12">
                        <PhFilter />
                    </div>
                    <div className="col-12">
                     <SrmFilter/>
                    </div>
                </div>
            </div>
        </div>
    )
}
