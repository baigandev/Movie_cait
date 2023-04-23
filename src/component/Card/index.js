import React from 'react';

const Card = () => {
    return (
        <div id="card">
            <div className="container">
                <div className="card">
                    <div className="card--info">
                        <h1>Смотрите на телевизоре.</h1>
                        <p>Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.</p>
                    </div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
                    <iframe width="450" height="250" src="https://www.youtube.com/embed/a8Gx8wiNbs8"
                            title="Avatar: The Way of Water | Official Teaser Trailer" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Card;