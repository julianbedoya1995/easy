import { NavLink } from "react-router-dom";
import { RoutesMain } from "../../../routes/RoutesMain";
import "./Menu.css";

export const Menu = () => {
  const routes = RoutesMain().props.children.props.children;

  return (
    <nav>
      <img src="logo.svg" alt="Logo de easyfood" />
      <ul>
        {routes.map(
          (route: { props: { path: string } }) =>
            route.props.path !== "/" &&
            route.props.path !== "*" && (
              <li key={route.props.path}>
                <NavLink to={route.props.path}>{route.props.path.split("/")}</NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};
