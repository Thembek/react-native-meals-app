import { createContext } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }){
    return(
        <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
    )
}

export default FavoriteContextProvider;