import React,{useContext,useEffect} from 'react';
import BeerList from './BeerList'
import BeerSearch from './BeerSearch'
import BeerFilters from './filters/BeerFilters';
import { BeerContext } from '../../contexts/BeerContextsProvider';
import Paginate from '../base/Paginate';

export default function Beer() {

    const {setBeerData,currentPage,url,filteredData,setListedFiltredData,phChecked,setCurrentPage,pageCount,search,setFiltredData}=useContext(BeerContext);

    useEffect(() => {
        fetch(`${url}page=${currentPage}&per_page=3`).then(response=>response.json()).then(data=>{
            setBeerData(data);
        })
        
    }, []);

    //Filtreleme işlemlerinde url değiştiği için currentPage değiştikçe son değiştirilen url'e bağlı işlem yapacaktır.
    useEffect(() => {
        if(filteredData.length>0  && (!phChecked)){  //pageCount kontrol edilecek!!
            let newData=[];
            let arrayLength=0;
            if(currentPage>pageCount && currentPage-pageCount<1){
                let lastDataCount=(filteredData.length%3)
                let data=filteredData.slice(filteredData.length-lastDataCount)
                setListedFiltredData(data);
            }
            else{
                let start=currentPage!==1?(currentPage-1)*3:0;
                for(let i=start;i<(currentPage-1)*3+3;i++){
                    newData.push(filteredData[i]);
                }
    
                setListedFiltredData(newData);
            }
                       
           
        }
        else if(filteredData.length>0){  //pageCount kontrol edilecek!!
            let newData=[];
            let arrayLength=0;
            if(currentPage>pageCount && currentPage-pageCount<1){
                let lastDataCount=(filteredData.length%3)
                let data=filteredData.slice(filteredData.length-lastDataCount)
                setListedFiltredData(data);
            }
            else{
                let start=currentPage!==1?(currentPage-1)*3:0;
                for(let i=start;i<(currentPage-1)*3+3;i++){
                    newData.push(filteredData[i]);
                }
    
                setListedFiltredData(newData);
            }
                       
           
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
