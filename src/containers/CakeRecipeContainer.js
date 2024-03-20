import Recipe from "../components/Recipe";

const CakeRecipeContainer = () => {
    
   const recipes = [
        // Victora Sponge
        {
            cakeName: "Victoria Sponge",
               ingredients: [
                   "eggs ",
                  "butter ",
                  "sugar ",
                      "self-raising flour ",
                  "baking powder ",
                  "milk "
              ],
              price: 5,
              rating: 5
        },
    
        // Tea Loaf
        {
             cakeName: "Tea Loaf",
               ingredients: [
                   "eggs ",
                  "oil ",
                  "dried fruit ",
                      "sugar ",
                  "self-raising flour",
                  "strong tea",
              ],
              price: 2,
              rating: 3
        },
    
        // Carrot Cake
        {
             cakeName: "Carrot Cake",
               ingredients: [
                    "carrots",
                      "walnuts",
                  "oil",
                      "cream cheese",
                      "flour",
                  "sugar",
               ],
               price: 8,
               rating: 5
        }
    ] 

    
   const average = recipes[0].price + recipes[1].price + recipes[2].price;
    
   return ( 
        <>
        <h2>Cake Collection</h2>
           <Recipe recipe={recipes[0]} />
           <Recipe recipe={recipes[1]} />
           <Recipe recipe={recipes[2]} />
           <p>Average rating of all cakes: {average} </p>
       </>
        

     );
}
 
export default CakeRecipeContainer;