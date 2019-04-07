import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjDyu7U5r7hAhVEZN8KHWXSCkAQjRx6BAgBEAU&url=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fmy-recipe-book-organizer%2Fid375811859%3Fmt%3D8&psig=AOvVaw0xXdQ1WiBtjRW-IB85JKUJ&ust=1554754677209753')
  ];
  constructor() { }

  ngOnInit() {
  }

}
