import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';


//Delete @Injectable
@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe('Salad', 'Lettuce', 'http://www.pngmart.com/files/1/Salad-PNG.png', [
			new Ingredient('Green Stuff', 9),
			new Ingredient('Vegetable Stuff', 6),
		]),
    new Recipe('Comfort Food', 'Beans and Magic', 'http://cache.boston.com/bonzai-fba/Third_Party_Photo/2012/03/09/comfort-foods-539__1331313685_6560.jpg', [
    	new Ingredient('Other Stuff', 6),
			new Ingredient('Other Stuff too', 9),
    ])
	];

  constructor() { }

  getRecipes(){
  	return this.recipes;
  }

  getRecipe(id: number){
  	return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
  	this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
      this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  removeItem(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

}
