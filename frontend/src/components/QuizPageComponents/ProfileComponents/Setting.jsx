import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/QuizSlice";
import "./styles.css";
import store from "../../../store/store";
import { reset } from "../../../features/QuizSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "../../../hooks/LocationContext";
import { useEffect, useRef, useState } from "react";


function Setting() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {setLogged} = useLocation()
    const [isFullscreen, setIsFullscreen] = useState(false);


    useEffect(() => {
        const handler = () => {
        setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handler);
        return () => document.removeEventListener("fullscreenchange", handler);
    }, []);


    const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true)
    } else {
      document.exitFullscreen();
      setIsFullscreen(false)
    }
  };



    function logoutUser() {
        store.dispatch(logout());
        localStorage.removeItem("WorldWise_currentUser");
    }


    function handleLogOut() {
        logoutUser();
        navigate(`/`);
        setLogged(false)
    }


    

    return (
        <div className="user-information">
            <ul>
                <h4>Setting</h4>
                <li onClick={()=> navigate("/Quiz/UpdateProfile")}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffbb00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                    </div>
                    <p>Edit</p>
                </li>
                <li onClick={toggleFullscreen}>
                    <div className="icon">
                        {isFullscreen ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffbb00" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fold-vertical-icon lucide-fold-vertical"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3-3-3 3"/><path d="m15 5-3 3-3-3"/></svg>
                        : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffbb00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-maximize2-icon lucide-maximize-2"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
                        }
                    </div>
                    <p>{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</p>
                </li>


                <li onClick={()=> dispatch(reset())}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffbb00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    </div>
                    <p>Reset</p>
                </li>

                <li onClick={handleLogOut}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffbb00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                    </div>
                    <p>Log out</p>
                </li>

            </ul>
        </div>
  );
};

export default Setting;