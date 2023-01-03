import MovieList from "./components/MovieList";
import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Filter from './components/Filter';
import Add from './components/Add';

function App() {
  const [movies,setMovies] = useState(MovieList)
  const [search,setSearch] = useState('');
  const [rate, setRate] = useState(0)
  const AddNewMovie = (kk)=>{
      setMovies([...movies, kk])
  }
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-around',gap:'40px',margin:'40px 0px'}}>
        <Add AddNewMovie={AddNewMovie}/>
        <Filter setSearch={setSearch} setRate={setRate}></Filter>
      </div>
      <MovieCard movies={movies.filter(movie=> movie.Title.toLocaleLowerCase().trim().includes(search) && movie.rating>= rate)} />
    </div>
  );
}

export default App;
