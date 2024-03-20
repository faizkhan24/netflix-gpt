import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    // fetch data from tmdb api update store 
 useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
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
