import React, {useState } from 'react';
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

import NoImage from './images/no_image.jpg'

const Home = ()=>{
    const [{
        state:{movies,currentPage, totalPages, heroImage},
        loading,
        error
    }, fetchMovies] = useHomeFetch();
    const  [searchTerm, setsearchTerm] = useState('');

    // console.log(state);
    const LoadMoreMovies = ()=>{

    }

    if(error) return <div>Somthing went wrong!!!!</div>
    if(!movies[0]) return <Spinner/>

    return (
        <React.Fragment>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title ={heroImage.original_title}
                text={heroImage.overview}
            />
            <SearchBar/>
            <Grid header={searchTerm ? 'Search Result':'Popular Movies'}>
                {movies.map(movie=>(
                 <MovieThumb
                        key={movie.id}
                        clickable 
                        image={movie.poster_path 
                        ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
                        : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                        />
                ))
                }
            </Grid>
            {loading && <Spinner/>}
            <LoadMoreBtn text="Load More" callback={LoadMoreMovies}/>
        </React.Fragment>
    )
};


export default Home;