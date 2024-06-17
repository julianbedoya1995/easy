import { NavLink } from "react-router-dom";
import "./MenuComponent.css";

export const MenuComponent = () => {
  const routes = [
    { url: "feed", name: "Feed" },
    { url: "categorias", name: "Categorias" },
    { url: "mi-perfil", name: "Perfil" },
  ];

  return (
    <nav>
      <ul>
        {routes.map(({ url, name }) => (
          <li key={url}>
            <NavLink to={url}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
