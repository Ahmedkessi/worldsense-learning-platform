import { createContext, useContext, useEffect, useState } from "react";

const favouritesContext = createContext();


export default function FavouritesProvider({children}) {
    const [favouriteCountries, setFavouriteCountries] = useState(() => {
    const stored = localStorage.getItem("favouritesView");
    return stored ? JSON.parse(stored) : [];
    });

    const [ques, setQues] = useState(()=> {
        const stored = localStorage.getItem("lessonQuizes");
        if(stored === `undefined`) return {};
        return stored ? JSON.parse(stored) : {};
    })

    useEffect(() => {
        localStorage.setItem("favouritesView", JSON.stringify(favouriteCountries));
    }, [favouriteCountries]);

    useEffect(() => {
        localStorage.setItem("lessonQuizes", JSON.stringify(ques));
    }, [ques]);


    return(
        <favouritesContext.Provider value={{favouriteCountries, setFavouriteCountries, ques, setQues}}>
            {children}
        </favouritesContext.Provider>
    )

}




function useFavourites() {
    const context = useContext(favouritesContext)
    if(context === undefined) throw new Error(`This context was used outside FavouritesProvider!`)
    return context;
}


export {useFavourites}

