import CatalogPage from "pages/CatalogPage";
import FavoritesPage from "pages/FavoritesPage";
import HomePage from "pages/HomePage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/catalog" element={<CatalogPage/>}/>
      <Route path="/favotites" element={<FavoritesPage/>}/>
    </Routes>
  );
};
