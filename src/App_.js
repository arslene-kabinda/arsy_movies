import React,{useState, useEffect} from 'react';
import { AppStyle } from './AppStyle';
import Header from './components/Header/Header'
import Traider from './components/Hero/Traider/Traider';

import Movie from './components/Movies/Movie';
import { MovieStyle } from './components/Movies/MovieStyle';
import Serie from './components/Series/Serie';
import { SerieStyle } from './components/Series/SerieStyle';

import axios from 'axios';

const App = () =>{

const [searchWord,setSearchWord] = useState("")
const [spinner,setSpinner] = useState(false);
const [trending, setTrending] = useState([]);

const fetchTrending = async() =>{
const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
setTrending(data.results);
}

useEffect(()=>{
  setSpinner(true)
 fetchTrending();
},[]);

return (
    <AppStyle >
      
      {spinner ? <div className="loader"></div> :<div> 
      <Header/>

      <Traider/>
      <h1>On The Spot Light</h1>
      <h2>Movies</h2>


      {/* <MovieStyle className="d-flex justify-content-evenly flex-wrap mt-5">
        { movies.map(movie=>
          <Movie  className="card" key={ movie.id} {...movie}/>)
        }
      </MovieStyle>

      <h2>Series</h2>

      <SerieStyle className="d-flex justify-content-evenly flex-wrap mt-5">
      { series.map(serie=>
          <Serie className="card" key={ serie.id} {...serie}/>)
        }
      </SerieStyle>
       */}
      
      </div>}


     
    </AppStyle>
    
  );
}

export default App;
