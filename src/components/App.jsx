import { HomePage, CatalogPage, FavoritesPage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { SideBar } from './SideBar/SideBar';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>

    </Routes>
  );
};
