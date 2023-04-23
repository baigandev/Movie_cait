import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../component/MovieCard";

const TopRated = () => {
    const  [toprated,settoprated] = useState([])
    const getToprated = (key) => {
      axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`)
          .then((res) => {
              settoprated(res.data.results)

          })
    }
    useEffect(() => {
        getToprated(API_KEY)
    }, [])
    return (
        <div id="popular">
          <div className="container">
              <div className="popular">
                  {
                      toprated.map(el => (
                          <MovieCard el={el}/>
                          )
                      )
                  }
              </div>
          </div>
        </div>
    );
};

export default TopRated;