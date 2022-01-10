import React,{createContext, useContext, useState} from 'react';


export const BeerContext=createContext();

export default function BeerContextsProvider({children}) {

const [beerData,setBeerData]=useState([]);
const [toggleVolume,setToggleVolume]=useState('none');
const [alcoholVolume,setAlcoholVolume]=useState(0);
const [pageCount,setPageCount]=useState(20);
const [currentPage,setCurrentPage]=useState(1);
//main beers
const [data, setData] = useState([]);
//search
const [search, setSearch] = useState("");
const [url,setUrl]=useState('https://api.punkapi.com/v2/beers?') //her filtreleme işleminde url değiştirmek için state olarak tanımladım.
const [pHData,setPHData]=useState([0,1]);
const [phChecked,setPhChecked]=useState(true);
const [filteredData,setFilteredData]=useState([]);
const [listedFilteredData,setListedFiltredData]=useState([]);

const getFilteredItems = (search, data) => {
    if (!search) {
      return data;
    }
    return data.filter((item) => item.name.toLowerCase().includes(search));
  };
  const filteredItems = getFilteredItems(search, data);


const value={
    beerData,setBeerData,
    pHData,setPHData,
    toggleVolume,setToggleVolume,
    alcoholVolume,setAlcoholVolume,
    pageCount,setPageCount,
    currentPage,setCurrentPage,
    url,setUrl,
    phChecked,setPhChecked,
    filteredData,setFilteredData,
    listedFilteredData,setListedFiltredData,
    data, setData,
    search, setSearch,
}

    return (
        <BeerContext.Provider value={value}>{children}</BeerContext.Provider>
    )
}
