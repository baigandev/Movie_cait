import React from 'react';

const Content = () => {
    return (
        <div id="boxes">
            <div className="container">
                <div className="boxes">
                    <div className="boxes--info">
                        <h1>Смотрите на телевизоре.</h1>
                        <p>Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.</p>
                    </div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt=""/>
                    <iframe width="390" height="245" src="https://www.youtube.com/embed/uNMafwGsLGg?controls=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Content;