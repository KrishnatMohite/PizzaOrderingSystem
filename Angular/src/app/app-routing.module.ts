import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakePizzaComponent } from './components/make-pizza/make-pizza.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path:"menu", component : MenuComponent },
  { path:"makePizza", component : MakePizzaComponent },
  { path:'', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
