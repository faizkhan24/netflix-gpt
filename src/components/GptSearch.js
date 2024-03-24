import { BGIMAGE } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () =>{
    return <div>
        <div className="absolute -z-30 bg-black ">
        <img className="h-screen w-screen object-cover  opacity-50 " src={BGIMAGE} alt="logo" />
        </div>
       <GptSearchBar/>
       <GptMovieSuggestion/>
    </div>
}

export default GptSearch;