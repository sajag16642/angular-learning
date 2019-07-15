import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] =[
    new Ingredient('Appple',5),
    new Ingredient('tomatoes',10)
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(Ingredient: Ingredient){
    this.ingredients.push(Ingredient);
  }
}
