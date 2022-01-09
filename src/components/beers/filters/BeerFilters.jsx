import React,{useContext,useEffect} from 'react';

import VolumeFilter from './VolumeFilter';
import PhFilter from './PhFilter';
import SrmFilter from './SrmFilter';
import { BeerContext } from '../../../contexts/BeerContextsProvider';

export default function BeerFilters() {

    const URL="https://api.punkapi.com/v2/beers?"

    const {alcoholVolume,toggleVolume,setBeerData,setCurrentPage,setPageCount,currentPage,setUrl}=useContext(BeerContext);

    //Alkol oranı değiştikçe state olarak çektiğim setUrlin içini parametreli url e dönüştürdüm.Çünkü sayfa sayısı değiştiğinde bu parametreli url e ihtiyacımız var.
    useEffect(() => {
        if(alcoholVolume!==null && toggleVolume!=='none'){
            fetch(`${URL}page=1&per_page=60&${toggleVolume}=${alcoholVolume}`).then(response=>response.json()).then(data=>{
                setCurrentPage(1);
                setPageCount(data.length/3);
                
            })
            fetch(`${URL}page=1&per_page=3&${toggleVolume}=${alcoholVolume}`).then(response=>response.json()).then(data=>{
                setUrl(`${URL}page=${currentPage}&per_page=3&${toggleVolume}=${alcoholVolume}`)
                setCurrentPage(1)
                setBeerData(data);
               
            })
            
        }
        else{

            fetch(`${URL}page=${currentPage}&per_page=3`).then(response=>response.json()).then(data=>{
                setCurrentPage(1)
                setBeerData(data);
                setUrl(URL)
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
