import React, { useContext, useEffect } from 'react';
import { BeerContext } from '../../contexts/BeerContextsProvider';

export default function BeerList() {
    const { beerData, listedFilteredData, phChecked, search,
        filteredData,isReset,
        setBeerData,
        setPHData,
        setToggleVolume,
        setAlcoholVolume,
        setPageCount,
        setCurrentPage,
        setUrl,
        setPhChecked,
        setFilteredData,
        setListedFiltredData,
        setData,
        setSearch,
        setIsReset } = useContext(BeerContext);
    useEffect(() => {

        if(isReset===true){
           
            setPHData([0,1]);
            setToggleVolume('none')
            setAlcoholVolume(0);
            setPageCount(20);
            setCurrentPage(1);
            setUrl('https://api.punkapi.com/v2/beers?')
            setPhChecked(true);
            setFilteredData([])
            setListedFiltredData([])
            setData([])
            setSearch("")
            setIsReset(false)
        }
  

    }, [isReset])


    return (

        <div className="container">
            <div className="row">

                {
                    search !== "" ?

                        (filteredData.length >0 ?

                            listedFilteredData.length > 0 && (!phChecked) ?

                                listedFilteredData.map((post, index) => (
                                    <div className="col-4">
                                        <div className="card mb-3 text-center ">

                                            <img
                                                key={index}
                                                src={post.image_url}
                                                className="card-img-top"
                                                height={500}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{post.name}</h5>
                                                <p className="card-text">First Brewed In: {post.first_brewed}</p>
                                            </div>

                                        </div>
                                    </div>

                                )):
                                listedFilteredData.map((post, index) => (
                                    <div className="col-4">
                                        <div className="card mb-3 text-center ">

                                            <img
                                                key={index}
                                                src={post.image_url}
                                                className="card-img-top"
                                                height={500}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{post.name}</h5>
                                                <p className="card-text">First Brewed In: {post.first_brewed}</p>
                                            </div>

                                        </div>
                                    </div>

                                )):

                            beerData.map((post, index) => (
                                <div className="col-4">
                                    <div className="card mb-3 text-center ">

                                        <img
                                            key={index}
                                            src={post.image_url}
                                            className="card-img-top"
                                            height={500}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.name}</h5>
                                            <p className="card-text">First Brewed In: {post.first_brewed}</p>
                                        </div>

                                    </div>
                                </div>

                            )) ):
                            beerData.map((post, index) => (
                                <div className="col-4">
                                    <div className="card mb-3 text-center ">

                                        <img
                                            key={index}
                                            src={post.image_url}
                                            className="card-img-top"
                                            height={500}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.name}</h5>
                                            <p className="card-text">First Brewed In: {post.first_brewed}</p>
                                        </div>

                                    </div>
                                </div>

                            ))

                            }   
                           

            </div>

        </div>


    )
}
