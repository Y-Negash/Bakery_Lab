import '../App.css';
const Recipe = ({recipe, cakeSold, onButtonClick}) => {
  
  const handleSellCakeButtonClick = () => {
    onButtonClick(cakeSold + 1);
  }
  
  const ingredient = recipe.ingredients.map(ingredient => <li>{ingredient}</li>)

    return ( 
       <>
        <h3>Cake name: {recipe.cakeName}</h3>
        <h3>Ingredients: </h3>
        <ul>{ingredient}</ul>
        <p>£{recipe.price}</p>
        <p>{recipe.rating} stars</p>
        <button onClick={handleSellCakeButtonClick}>Sell Cake!</button>
       </>
        
     );
}
 
export default Recipe;