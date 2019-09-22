import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './list-book/list-book.component';
import { BookRoutingModule } from './book-routing.module';
import { CardBookComponent } from './card-book/card-book.component';
import { BookNamePipe } from '../../pipes/book/book-name.pipe';
import { FormsModule } from '@angular/forms';
import { BasketBookComponent } from './basket-book/basket-book.component';

@NgModule({
  declarations: [ListBookComponent, CardBookComponent, BookNamePipe, BasketBookComponent],
  imports: [CommonModule, BookRoutingModule, FormsModule]
})
export class BookModule {}
