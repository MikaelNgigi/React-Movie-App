import React from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import {Link} from "react-router-dom";
import {OutlineButton} from "../components/button/Button";
import MovieList from "../components/movie-list/MovieList";
import {category, movieType, tvSeriesType} from "../api/tmdbApi";

const Home = () => {
    return (
        <>
            <HeroSlider/>
            <div className='container'>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Popular Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                 <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Upcoming Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Tv Series</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvSeriesType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Airing Today</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvSeriesType.airing_today}/>
                </div>

            </div>


        </>
    );
}
export default Home;