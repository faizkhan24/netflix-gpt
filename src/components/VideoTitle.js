import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title,overview}) =>{
    return <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex  space-x-5 ">
            <div className="p-4 w-36 bg-white  text-black  rounded-md shadow-lg space-x-3 items-center px-10 border border-black flex">
               <FaPlay />  
              <button className=" font-bold ">Play</button>  
            </div>
       
            <div className="bg-opacity-65 bg-gray-600 hover:opacity-80 transition-all duration-200 shadow-lg p-4 w-36 flex items-center space-x-2 rounded-md">
            <IoMdInformationCircleOutline className="text-2xl " />
                 <button  >More Info</button>
            </div>
           
        </div>
    </div>
}

export default VideoTitle;