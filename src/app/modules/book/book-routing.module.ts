import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListBookComponent } from './list-book/list-book.component';
import { BasketBookComponent } from './basket-book/basket-book.component';

const routes: Routes = [
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: 'basket',
    component: BasketBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
