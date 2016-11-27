import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [`
    	.card-img-top{
    		max-width: 100%;
    	}
      .card.active {
        border: 1px solid #009688;
      }
    `]
})
export class RecipeItemComponent {

	@Input() recipe: Recipe;
	@Input() recipeId: number;

}
