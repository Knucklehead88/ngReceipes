import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes:Recipe[] = [
        new Recipe('test receipe','test', 
        'https://kentrollins.com/wp-content/uploads/2018/07/refried-bean-recipe.jpg', 
        [
          new Ingredient('Meat', 1),
          new Ingredient('French fries', 20)
        ]),
        new Recipe('Another receipe','another test', 
        'https://kentrollins.com/wp-content/uploads/2018/07/refried-bean-recipe.jpg', 
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]),
      ];

      constructor(private slService: ShoppingListService) {}


      getReceipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}