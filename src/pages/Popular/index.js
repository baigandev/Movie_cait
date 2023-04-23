import React, {useState, useEffect, useContext,} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../component/MovieCard";
import {LanguageContext} from "../../component/Context"

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [active, setActive] = useState(1)
    const {language} = useContext(LanguageContext)
    const getPopular = (key) => {

        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                setPopular(res.data.results)
            })
    }
    useEffect(() => {
        getPopular(API_KEY)
    }, [active,language])
    return (
        <div id="popular">
           <div className="container">
               <div className="popular">
                   {
                      popular.map((el) => (
                         <MovieCard el={el}/>
                      ))
                   }
               </div>
           </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <button onClick={() => {
                    setActive(active === 1 ? 1 : active -1)
                }} style={{
                    color: '#fff',
                    background: 'blue',
                    padding: '10px 20px',
                    margin: '70px 15px 0 0',
                    borderRadius: '10px',
                }}>назад
                </button>
                <h1 style={{
                    color: 'white',
                    margin:'70px 20px 0 20px',
                    fontSize: '30px'
                }}>{active}</h1>
                <button onClick={() => {
                    setActive(active +1)
                }} style={{
                    color: '#fff',
                    background: 'blue',
                    padding: '10px 20px',
                    margin: '70px 15px 0 0',
                    borderRadius: '10px',
                }}>далее</button>
                <button onClick={() => {
                    setActive(1)
                }} style={{
                    color: '#fff',
                    background: 'blue',
                    padding: '10px 20px',
                    margin: '70px 15px 0 0',
                    borderRadius: '10px',
                }}>return</button>
            </div>
        </div>
    );
};

export default Popular;




