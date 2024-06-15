export const MenuComponent = () => {
  const routes = ["Inicio", "Categorías", "Amigos"];

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li>
            <a key={route} href="">
              {route}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
