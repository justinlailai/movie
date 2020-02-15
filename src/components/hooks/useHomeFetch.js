import {useState, useEffect} from 'react';
import {POPULAR_BASE_URL} from  '../../config';

export const useHomeFetch =()=>{
    const [state, setState] = useState({movies:[]});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // console.log(state);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);

        const isLoadMore = endpoint.search('page');
        // 節點(字串)裡面是否有page，沒有的話回傳-1

        try{
            const result = await(await fetch(endpoint)).json();
            console.log(result);
             setState(prev=>({
                 ...prev,
                 movies:isLoadMore !== -1
                //  有page的話用加載模式
                 ?[...prev.movies, ...result.results]
                //  沒有page的話，刪除所有movies重新放入result
                 :[...result.results],
                 heroImage:prev.heroImage || result.results[4],
                 currentPage:result.page,
                 totalPages:result.total_pages
             }));
            //  console.log(state);

        }catch (error){
            setError(true);
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchMovies(POPULAR_BASE_URL);
    },[])

    return [{state,loading,error}, fetchMovies];
}

export default useHomeFetch;

