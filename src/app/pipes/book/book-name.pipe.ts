import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../../models/book/book.i';

@Pipe({ name: 'bookName' })
export class BookNamePipe implements PipeTransform {
  transform(books: IBook[], filter: string): IBook[] {
    if (!books || !filter) {
      return books;
    }
    return books.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
