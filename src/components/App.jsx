
import {HomePage, CatalogPage, FavoritesPage } from "pages";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/catalog" element={<CatalogPage/>}/>
      <Route path="/favorites" element={<FavoritesPage/>}/>
    </Routes>
  );
};
