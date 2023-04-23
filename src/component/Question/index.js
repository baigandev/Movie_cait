import React from 'react';

const Question = () => {

    return (
        <div id="question">
            <div className="container">
                <div className="question">
                    <h1>Распространенные вопросы</h1>
                    <div className="question--blocks">
                        <div className="question--blocks__block">
                            <p>Что из себя представляет Netflix?</p>
                            <span>click</span>
                        </div>
                        <div className="question--blocks__content">
                            <p>Netflix — это стриминговый сервис, позволяющий смотреть разнообразные удостоенные наград фильмы, сериалы, аниме, документальные фильмы и многое другое на тысячах устройств с подключением к интернету.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;