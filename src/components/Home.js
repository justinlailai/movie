import React, {useState, useEffect } from 'react';
import { 
    API_URL, 
    API_KEY, 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE 
} from '../config';


import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LordMoreBtn';
import Spinner from './elements/Spinner';

// costum Hook
import {useHomeFetch} from './hooks/useHomeFetch';

const Home = ()=>{
    const [{state,loading,error}, fetchMovies] = useHomeFetch();
    console.log(state);
    return (
        <React.Fragment>
            <HeroImage/>
            <SearchBar/>
            <Grid/>
            <MovieThumb/>
            <Spinner/>
            <LoadMoreBtn/>
        </React.Fragment>
    )
};


export default Home;