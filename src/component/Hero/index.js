import React from 'react';

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--content">
                        <h1>Фильмы, сериалы и многое другое без ограничений.</h1>
                        <p>Смотрите где угодно. Отменить подписку можно в любое время.</p>
                        <p>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</p>
                        <div className="hero--content__search">
                            <input type="email" placeholder="Введите почту"/>
                            <button>Начать смотреть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;