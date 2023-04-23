import './App.scss';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import MovieDetails from "./pages/MovieDetails";
import Block from "./component/Block";
import ActorDetails from "./component/ActorDetails";
import Card from "./component/Card";
import Content from "./component/Content";
import Question from "./component/Question";
import Search from "./pages/Search";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/topRated"} element={<TopRated/>}/>
                <Route path={"/movie/details/:movieId"} element={<MovieDetails/>}/>
                <Route path={"/actor/details/:personId"} element={<ActorDetails/>}/>
                <Route path={"/search/search_movie/:movieName"} element={<Search/>}/>
            </Routes>
            <Card/>
            <Block/>
            <Content/>
            <Question/>
            <Footer/>

        </div>
    );
}

export default App;
