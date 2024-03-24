import { useSelector } from "react-redux";
import lang from "../utils/languageContants";

const GptSearchBar = () => {
  const langKey = useSelector(store=> store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center z-20 ">
      <form className=" w-1/2 bg-black rounded-md grid grid-cols-12 border-4 border-red-700">
        <input
          className="p-4 m-4 rounded-lg  col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="py-2  m-4 col-span-3 px-4 bg-red-700 text-white rounded-lg font-bold font-mono">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
