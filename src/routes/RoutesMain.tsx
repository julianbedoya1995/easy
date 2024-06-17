import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from "../components/pages/Feed";
import { Categories } from "../components/pages/Categories";
import { Error } from "../components/pages/Error";
import { Profile } from "../components/pages/Profile";
import { Recipes } from "../components/pages/Recipes";
import { MenuComponent } from "../components/Layout/MenuComponent/MenuComponent";

export const RoutesMain = () => {
  return (
    <BrowserRouter>
      <MenuComponent />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/recetas" element={<Recipes />} />
        <Route path="/mi-perfil" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
