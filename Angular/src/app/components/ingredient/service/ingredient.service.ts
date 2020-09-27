import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GET_INGREDIENT_URL } from 'src/app/shared/url.config';
import { Ingredient } from 'src/app/models/ingredient.model';

const ingredientGetUrl = GET_INGREDIENT_URL;

@Injectable()
export class IngredientService {
  
  constructor(private http: HttpClient) { 

  }

  getIngredient()  {
    return this.http.get<Ingredient[]>(ingredientGetUrl);
  }
}