import React,{useContext,useEffect} from 'react';

import VolumeFilter from './VolumeFilter';
import PhFilter from './PhFilter';
import SrmFilter from './SrmFilter';
import { BeerContext } from '../../../contexts/BeerContextsProvider';

export default function BeerFilters() {

    const URL="https://api.punkapi.com/v2/beers?page=1&per_page=3"

    const {alcoholVolume,toggleVolume,setBeerData}=useContext(BeerContext);
    useEffect(() => {
        if(alcoholVolume!==null){
            fetch(`${URL}&${toggleVolume}=${alcoholVolume}`).then(response=>response.json()).then(data=>{
                setBeerData(data);
            })
        }
        else{
            fetch(URL).then(response=>response.json()).then(data=>{
                setBeerData(data);
            })
        }
      
        
    }, [alcoholVolume])

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
