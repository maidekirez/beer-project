import React,{createContext, useContext, useState} from 'react';

export const BeerContext=createContext();

export default function BeerContextsProvider({children}) {

const [beerData,setBeerData]=useState([]);

const value={beerData,setBeerData}

    return (
        <BeerContext.Provider value={value}>{children}</BeerContext.Provider>
    )
}
