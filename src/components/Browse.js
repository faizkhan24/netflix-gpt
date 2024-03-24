import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
    // fetch data from tmdb api update store 
 useNowPlayingMovies();
  usePopularMovies();
 useTopRated();
 useUpcomingMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ?   <GptSearch/> : <>
        <MainContainer/>
      <SecondaryContainer/>
        </>
      }
    
      
      {/* Main Video Container
       - VideoBackground
       - Video Title
      SecondaryContainer
        - MovieList *n
           -cards*n */}
    </div>
  );
};

export default Browse;
