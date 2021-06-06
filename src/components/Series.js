import React from 'react'

import Loading from'./Loading'
import { useState, useEffect } from 'react';


const Series = ({data:  { entries}}) => {
    if(!entries){
        return <Loading/>;
    }
    entries.sort(function( a, b ) {
        if ( a.title.toLowerCase() < b.title.toLowerCase() ){
          return -1;
        }
        if ( a.title.toLowerCase() > b.title.toLowerCase() ){
          return 1;
        }
        return 0;
      });

 
   

    return (
        
        <div>
            <header>
                <p>Popular Series</p>
            </header>

            <div className="titles seriestitle">
            {
                entries.map((entry) => {
                    if(entry.releaseYear>=2010 ){
                        if(entry.programType==='series'){
                            
                            return <div className="card">
                            <img src= "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" alt="" />
                            <p>{entry.title}</p>
                        </div>
                            
                        }
                        
                    }
                })
               
                
            } 
            <div className="margin"></div>
                
            </div>
        </div>
    )
}

export default Series;