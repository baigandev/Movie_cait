import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import ActorsCard from "../../component/ActorsCard";
import Trailer from "../../component/Trailer";


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const {movieId} = useParams()
    const getMovieDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
            .then((res) => {
                setMovieDetails(res.data)
            })
    }
    useEffect(() => {
        getMovieDetails(API_KEY)
    }, [])
    console.log(movieDetails)
    console.log(movieId)
    const {poster_path, title, overview, runtime, backdrop_path,vote_average, genres,release_date,tagline} = movieDetails
    return (
        <>
            <div id="MovieDetails" style={{
                background: `url("https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/${backdrop_path}") no-repeat center/cover`
            }}>
                <div className="container">
                    <div className="MovieDetails">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt="img"/>
                        <div className="MovieDetails--block">
                            <h1>{title}</h1>
                            <div className="MovieDetails--block__genres">
                                {
                                    genres?.map((el) =>(
                                        <h3>{el.name}</h3>
                                    ))
                                }
                            </div>
                            <h3> Длительность:{Math.floor(runtime / 60)}h {runtime % 60}min</h3>
                            <h3>Дата выхода: {release_date}</h3>
                            <h2><i>{tagline}</i></h2>
                            <p>{overview}</p>
                            <div className="MovieDetails--block__vote">
                                {Math.round(vote_average * 10)} <sub>%</sub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ActorsCard id={movieId}/>
            <Trailer id={movieId}/>
        </>

    );
};

export default MovieDetails;


// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US