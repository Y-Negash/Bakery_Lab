const Recipe = ({recipe}) => {
    
    return ( 
       <>
        <h3>Cake name: {recipe.cakeName}</h3>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Price: £{recipe.price}</p>
        <p>Rating: {recipe.rating} stars</p>
       </>
        
     );
}
 
export default Recipe;