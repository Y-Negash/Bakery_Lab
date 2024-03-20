import '../App.css';
const Recipe = ({recipe, cakeSold, onButtonClick}) => {
  
  const handleSellCakeButtonClick = () => {
    onButtonClick(cakeSold + 1);
  }
  
  const ingredient = recipe.ingredients.map(ingredient => <li>{ingredient}</li>)

    return ( 
       <>
       <div className='recipe'>
        <h3>Cake name: {recipe.cakeName}</h3>
        <div className='list-container'>
          <h3>Ingredients:</h3>
          <ul>{ingredient}</ul>
        </div>
        <p>£{recipe.price}</p>
        <p>{recipe.rating} stars</p>
        <button onClick={handleSellCakeButtonClick}>Sell Cake!</button>
        </div>
       </>
        
     );
}
 
export default Recipe;