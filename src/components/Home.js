import React, {useState } from 'react';
import { 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL
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

    const searchMovies = search =>{
        const endpoint = search?SEARCH_BASE_URL+search: POPULAR_BASE_URL;
        setsearchTerm(search);

        fetchMovies(endpoint);
    }

    const LoadMoreMovies = ()=>{
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage+1}`;
        const popularEnd = `${POPULAR_BASE_URL}&page=${currentPage+1}`

        const endpoint = searchTerm ? searchEndpoint : popularEnd;
        fetchMovies(endpoint);

    }

    if(error) return <div>Somthing went wrong!!!!</div>
    if(!movies[0]) return <Spinner/>
    console.log(totalPages)
    return (
        <React.Fragment>
            {!searchTerm && (
                <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title ={heroImage.original_title}
                text={heroImage.overview}
            />
            ) }
            <SearchBar callback={searchMovies}/>
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
            {currentPage < totalPages && !loading && (
            <LoadMoreBtn text="Load More" callback={LoadMoreMovies}/>
            )}
        </React.Fragment>
    )
};


export default Home;