import React,{useContext,useEffect} from 'react';
import BeerList from './BeerList'
import BeerSearch from './BeerSearch'
import BeerFilters from './filters/BeerFilters';
import { BeerContext } from '../../contexts/BeerContextsProvider';
import Paginate from '../base/Paginate';

export default function Beer() {

    const {setBeerData,currentPage,url,filteredData,setListedFiltredData}=useContext(BeerContext);

    useEffect(() => {
        fetch(`${url}page=${currentPage}&per_page=3`).then(response=>response.json()).then(data=>{
            setBeerData(data);
        })
        
    }, []);

    //Filtreleme işlemlerinde url değiştiği için currentPage değiştikçe son değiştirilen url'e bağlı işlem yapacaktır.
    useEffect(() => {
        if(filteredData.length>0 ){
            const newData=[];
            for(let i=currentPage-1;i<currentPage+2;i++){
                newData.push(filteredData[i]);
            }

            setListedFiltredData(newData);
        }
        else{
            if(url==='https://api.punkapi.com/v2/beers?'){
                fetch(`${url}page=${currentPage}&per_page=3`).then(response=>response.json()).then(data=>{
                    setBeerData(data);
                   
                })
            }
            else{
                fetch(`${url.replace('1',currentPage)}`).then(response=>response.json()).then(data=>{
                    setBeerData(data);
                   
                })
            }
        }
        
       
        
    }, [currentPage]);
    return (
        <div>
            <BeerSearch/>
            <BeerFilters/>
            <BeerList/>
            <Paginate/>
        </div>
    )
}
