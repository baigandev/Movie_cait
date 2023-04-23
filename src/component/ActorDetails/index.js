import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import Film from "../Film";

const ActorDetails = () => {
    const [actors, setActors] = useState({})
    const [bio, setBio] = useState(300)

    const {personId} = useParams()
    const getActor = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
            .then((res) => setActors(res.data))
    }

    function getOpen(text){
        if (bio === 300){
            return setBio(text.length)
        }else {
            return setBio(300)
        }
    }

    useEffect(() => {
        getActor(API_KEY)
    }, [])
    const {profile_path, name, biography, birthday, also_known_as, place_of_birth,} = actors
    return (
        <div id="actorsDetails">
            <div className="container">
                <div className="actorsDetails">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="actorsDetails--info">
                        <h1>{name}</h1>
                        <h2>Дата рождения: {birthday}</h2>
                        <h3>Место рождения: {place_of_birth}</h3>
                        <h4>Также известность как: {also_known_as}</h4>
                        <h4>Биография:</h4>
                        <p>{biography?.slice(0,bio)}</p>
                        <span onClick={() => getOpen(biography)} style={{
                            border: "2px solid red",
                            padding: "2px 15px",
                        }}>{bio === 300 ? "Читать дальше" : "Закрыть"}</span>
                        <Film id={personId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;

