import React,{createContext, useContext, useState} from 'react';

export const BeerContext=createContext();

export default function BeerContextsProvider({children}) {

const [beerData,setBeerData]=useState([]);
const [pHData,setPHData]=useState([]);
const [toggleVolume,setToggleVolume]=useState('');
const [alcoholVolume,setAlcoholVolume]=useState(0);

const value={
    beerData,setBeerData,
    pHData,setPHData,
    toggleVolume,setToggleVolume,
    alcoholVolume,setAlcoholVolume
}

    return (
        <BeerContext.Provider value={value}>{children}</BeerContext.Provider>
    )
}
