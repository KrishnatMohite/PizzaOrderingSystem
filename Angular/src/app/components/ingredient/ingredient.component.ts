import { Component, OnInit, Output,EventEmitter, OnDestroy } from '@angular/core';
import { IngredientService } from './service/ingredient.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Menu } from 'src/app/models/menu.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  providers:[IngredientService]
})
export class IngredientComponent implements OnInit, OnDestroy {
  // Start : variable declaration 
  ingredientList: Ingredient[] = [];
  selectedIngredient: Menu[] = [];
  @Output()
  onSelectEvent = new EventEmitter<Menu[]>();
  getIngredientSubscription: Subscription;
  allSubscriptions: Subscription[] = [];
  // End : variable declaration 
  
  constructor(private ingredientService:IngredientService) { }

  // Start : Lifecycle Events
  ngOnInit() {
    this.getIngredientSubscription = this.ingredientService.getIngredient().pipe()
    .subscribe((data)=>{
        this.ingredientList = data;
    });

    this.allSubscriptions.push(this.getIngredientSubscription);
  }

  ngOnDestroy() {
    this.allSubscriptions.forEach((subscription) => subscription.unsubscribe())
  }
  // End : Lifecycle Events

  // Start : Event
  onselectIngredient(ingredient : Ingredient){
      let index = this.selectedIngredient.findIndex(i=>i.Id === ingredient.Id);
      if(index>=0) {
         this.selectedIngredient.splice(index,1);
      } else {
        let item = new Menu();
        item.Id = ingredient.Id;
        item.Name = ingredient.Name;
        item.Price = ingredient.Price;
        this.selectedIngredient.push(item);
      }
      this.onSelectEvent.emit(this.selectedIngredient)
  }
  // End : Event
}
