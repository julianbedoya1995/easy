import { NavLink } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  const routes = [
    { url: "/", name: "Inicio" },
    { url: "calendario", name: "Calendario" },
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
