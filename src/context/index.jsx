import { createContext, useState } from "react";
import { useNavigate} from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([])

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchParam}`
      );

      const data = await res.json();
      
      if (data?.recipes) {
        setRecipeList(data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }
      console.log(recipeList);

    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  async function getRecipeDetails(id) {
    const response = await fetch(
      `https://dummyjson.com/recipes/${id}`
    );
    const data = await response.json();

    console.log(data);
    if (data) {
      setRecipeDetailsData(data);
    }
  }


  function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavoritesList.push(getCurrentItem)
    } else {
      cpyFavoritesList.splice(index)
    }

    setFavoritesList(cpyFavoritesList)
  }

  console.log(favoritesList, 'favoritesList');

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
        getRecipeDetails
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}