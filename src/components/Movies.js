import React from 'react'
import Loading from'./Loading'



const Movies = ({data:  { entries}}) => {
    if(!entries){
        return <Loading/>;
    }
    return (
        <div>
            <header>
                <p>Popular Movies</p>
            </header>

            <div className="titles seriestitle">
            {
                entries.map((entry) => {
                    if(entry.releaseYear>=2010 ){
                        if(entry.programType==='movie'){
                            
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

export default Movies;