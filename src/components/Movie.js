import React from 'react';

// component
import Navigation from './elements/Navigation';
import Actor from './elements/Actor';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import {useMovieFetch} from './hooks/useMovieFetch';

// movieId comes from URL
const Movie =({movieId})=>{
    const [movie,loading,error] = useMovieFetch(movieId);
    // 此處的movie來自於useMovieFetch export 出來的
    //  [state,loading,error] 裡面的state
    console.log(movie);

    if(error) return <div>Something went wrong...</div>;
    if(loading) return <Spinner/>

    return(
        <>
        <Navigation movie={movie.original_title}/>
        <MovieInfo
            movie={movie}
        />
        <MovieInfoBar/>
                <Grid>
                    <Actor/>
                </Grid>
        </>
    )
}


export default Movie;