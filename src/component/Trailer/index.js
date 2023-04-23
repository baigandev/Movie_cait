import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";

const Trailer = ({id}) => {
    const [video, setVideo] = useState([])
    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res) => setVideo(res.data.results))
    }
    useEffect(() => {
        getVideo(API_KEY)
    }, [])
    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    {
                        video.map((el) => (
                            <div className="video--card">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Trailer;