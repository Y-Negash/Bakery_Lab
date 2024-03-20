const Recipe = ({recipe}) => {
    
    const ingredient = recipe.ingredients.map(ingredient => <li>{ingredient}</li>)
    return ( 
       <>
        <h3>Cake name: {recipe.cakeName}</h3>
        <h3>Ingredients: </h3>
        <ul>{ingredient}</ul>
        <p>Price: £{recipe.price}</p>
        <p>Rating: {recipe.rating} stars</p>
       </>
        
     );
}
 
export default Recipe;