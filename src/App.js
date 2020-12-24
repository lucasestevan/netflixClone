import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

export default () => {

  //criar lista para exibir filme
  const[movieList, setMovieList] = useState([]);

  //quando a tela for carregada ee vai eecutar a funcao que eu escrever
  useEffect(()=>{
    const loadAll = async () => {
      //Pegar a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  },[]);

  return(
    <div className="page">
      
      <section className="lists">
        {movieList.map((item,key)=>(
          <div>
            <MovieRow key = {key} title={item.title} items={item.items}/>
          </div>
        ))}
      </section>
    </div>
  );
}