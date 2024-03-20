import Recipe from "../components/Recipe";
import '../App.css';
import { useState } from "react";

const CakeRecipeContainer = () => {
    
    const [vicCakeSold, setVicCakeSold] = useState(0);
    const [teaCakeSold, setTeaCakeSold] = useState(0);
    const [carCakeSold, setCarCakeSold] = useState(0);

 

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
        <hr />
        <div className="cake">
        <Recipe recipe={recipes[0]} cakeSold={vicCakeSold} onButtonClick={setVicCakeSold}/>
        <Recipe recipe={recipes[1]} cakeSold={teaCakeSold} onButtonClick={setTeaCakeSold}/>
        <Recipe recipe={recipes[2]} cakeSold={carCakeSold} onButtonClick={setCarCakeSold}/>
        <h3 className="average">Average rating of all cakes: {average} </h3>
        <h3 className="average">Total Cakes sold: {vicCakeSold + teaCakeSold + carCakeSold} </h3>
       </div>
        </>
        

     );
}
 
export default CakeRecipeContainer;