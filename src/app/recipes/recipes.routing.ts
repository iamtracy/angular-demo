import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const RECIPES_ROUTES: Routes = [
		{ path: '', component: RecipesComponent, children: [
		{ path: '', component: RecipeStartComponent },
		{ path: 'new', component: RecipeEditComponent },
		{ path: ':id', component: RecipeDetailComponent },
		{ path: ':id/edit', component: RecipeEditComponent }
	]}
];

export const reciptesRouting = RouterModule.forChild(RECIPES_ROUTES);