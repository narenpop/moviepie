import React from 'react'
const imageApi = 'https://image.tmdb.org/t/p/w500'

export default function Movie({vote_average,title,overview,poster_path,release_date}) {
    const setVote=(vote)=>{
          if (vote>5 && vote<=7){
             return 'orange';
          }
          else if (vote>7){
              return 'green';
          }
          else{
              return 'red';
          }
    }

    return (
        <div className="movie">
            <div className="image"><img src= {imageApi+poster_path}/></div>
            
            <div className="title">
            
                <div><h5>{title}</h5></div>
                <div>
                <span className={setVote(vote_average)}>{vote_average}</span></div>            
            
            </div>
            <div className="overview">
              <h3 style={{textDecoration:'underline',fontSize:'20px'}}>overview</h3>
              <p>{overview}</p>
            </div> 
            
        </div>
    )
   
}
