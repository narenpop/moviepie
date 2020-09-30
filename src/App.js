import React,{useState,useEffect} from 'react';
import './App.css';
import Movie from './Movie';
import Heading from './Heading';
const featured = 'https://api.themoviedb.org/4/list/1?api_key=1f5a07accaaf1165d372a2e84fc296f7'


function App() {
 const [movies,setMovies] = useState([]);
 useEffect(()=>{
   fetch(featured).then(Response=>Response.json())
   .then(data=>{console.log(data.results);
   setMovies(data.results);}
 );
},[]);
 
  return (
    <div>
 <Heading/>
  <div className="movie_container">
  {movies.map((movie)=>
    <Movie key={movie.id} {...movie}/>
    )}
  </div> 
    </div>
  
  );
}

export default App;
