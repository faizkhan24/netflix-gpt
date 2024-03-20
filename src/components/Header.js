import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubsribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubsribe when component umounts
    return () => unsubsribe();
  }, []);
  return (
    <div className="absolute flex justify-between w-screen py-2 px-0 bg-gradient-to-b from-black z-10">
      <img
        className="w-40 h-20  "
        src={LOGO}
      ></img>
      {user && (
        <div className="flex p-2 gap-10">
          <img className="w-12 h-12" src={user?.photoURL}></img>

          <button
            onClick={handleSignOut}
            className="bg-red-600 h-10 text-white font-bold py-2 px-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
