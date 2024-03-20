import Recipe from "../components/Recipe";

const CakeRecipeContainer = () => {
    
    const victoriaSpongeRecipe = {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs ",
                "butter ",
                "sugar ",
                "self-raising flour ",
                "baking powder ",
                "milk"
            ],
            price: 5,
            rating: 5
        };
    const teaLoafRecipe = {
        cakeName: "Tea Loaf",
          ingredients: [
              "eggs ",
             "oil ",
             "dried fruit ",
                 "sugar ",
             "self-raising flour ",
             "strong tea ",
         ],
         price: 2,
         rating: 3
   };
    const carrotCakeRecipe = {
        cakeName: "Carrot Cake",
          ingredients: [
               "carrots ",
                 "walnuts ",
             "oil ",
                 "cream cheese ",
                 "flour ",
             "sugar",
          ],
          price: 8,
          rating: 5
   };
    
   const average = victoriaSpongeRecipe.price + teaLoafRecipe.price + carrotCakeRecipe.price;
    
   return ( 
        <>
        <h2>Cake Collection</h2>
        <Recipe recipe={victoriaSpongeRecipe}/>
        <Recipe recipe={teaLoafRecipe}/>
        <Recipe recipe={carrotCakeRecipe}/>
        <p>Average rating of all cakes: {average} </p>
        </>

     );
}
 
export default CakeRecipeContainer;