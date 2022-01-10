import React, { useContext, useEffect } from 'react';
import { BeerContext } from '../../contexts/BeerContextsProvider';

export default function BeerList() {
    const { beerData, listedFilteredData,phChecked } = useContext(BeerContext);
    useEffect(() => {

        console.log(beerData)

    }, [beerData])
    return (

        <div className="container">
            <div className="row">



                {listedFilteredData.length > 0  && !phChecked ?
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

                    ))
                    :
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

                    ))}

            </div>

        </div>


    )
}
