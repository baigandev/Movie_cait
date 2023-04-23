import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className="popular--card">
            <Link to={`/movie/details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img"/>
            </Link>

            <h2>{el.title}</h2>
            <p>Дата выхода: {el.release_date}</p>
        </div>
    );
};

export default MovieCard;