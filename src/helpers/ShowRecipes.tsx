import { ListRecipes } from "../data/ListRecipes";

export const ShowRecipes = () => {
  const showList = ListRecipes();

  return (
    <>
      {showList.map((recipe, index) => (
        <article key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.preparation}</p>

          {recipe.ingredients.map((ingredient, i) => (
            <li key={i}>
              {ingredient.name}: {ingredient.amount}
            </li>
          ))}
        </article>
      ))}
    </>
  );
};
