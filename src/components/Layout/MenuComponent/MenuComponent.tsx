import { NavLink } from "react-router-dom";

export const MenuComponent = () => {
  const routes = ["feed", "categorias", "mi-perfil"];

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route}>
            <NavLink to={route}>{route}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
