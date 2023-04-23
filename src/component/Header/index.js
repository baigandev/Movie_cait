import React, {useContext, useState} from 'react';
import {LanguageContext} from "../../component/Context"
import {NavLink, useNavigate} from "react-router-dom";
const Header = () => {
    const  [search, setSearch] = useState("")
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)

    const input = (e) => {
        if (e.key === "Enter"){
            nav(`/nav/search_movie/${search}`)
        }
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--title">
                        <h1>Netflix</h1>
                        <div className="header--title__nav">
                            <NavLink to={"/"} className="header--title__nav--item">Home</NavLink>
                            <NavLink to={"popular"} className="header--title__nav--item">Popular</NavLink>
                            <NavLink to={"topRated"} className="header--title__nav--item">Top Rated</NavLink>
                        </div>
                        <div className="header--title__search">
                            <input type="search" placeholder="Поиск"
                                   onKeyDown={(e) => {
                                       input(e)
                                   }}
                                   onChange={(e) =>{
                                setSearch(e.target.value)
                            }}/>
                            <button onClick={() => nav(`/search/search_movie/${search}`)}>Поиск</button>
                        </div>

                        <div className="header--title__sign">
                            <select onChange={(e) => setLanguage(e.target.value)}>
                                <option value="ru-RU">Русский</option>
                                <option value="en_US">English</option>
                            </select>
                            <button>Войти</button>
                        </div>
                    </div>

                    <div className="header--content">
                        <h1>Фильмы, сериалы и многое другое без ограничений.</h1>
                        <p>Смотрите где угодно. Отменить подписку можно в любое время.</p>
                        <p>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</p>
                        <div className="header--content__search">
                            <input type="email" placeholder="Введите почту"/>
                            <button>Начать смотреть</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;