import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../../../models/book/book.i';
import { ConfigService } from '../../../services/config/config.service';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss']
})
export class CardBookComponent implements OnInit {
  public blockInfo: IBook;
  public isBasket: boolean = false;
  public isIntheBasket: boolean = false;
  private bookInTheBasket: IBook[] = [];
  @Input('book')
  set _bookInfo(value: IBook) {
    this.blockInfo = value;
  }

  @Input('is_basket')
  set _isBasket(value: boolean) {
    this.isBasket = value;
  }
  @Output('deleteBook') deleteBook = new EventEmitter<IBook>();

  constructor(private bookService: BookService, private configService: ConfigService) {}

  ngOnInit() {
    if (!!localStorage.getItem(this.configService.localStorageKey)) {
      this.getFromBooksFromStorge();
      this.isIntheBasket = this.bookInTheBasket.filter(book => book.isbn === this.blockInfo.isbn).length > 0;
    }
  }

  basketManager() {
    this.getFromBooksFromStorge();
    if (!this.isBasket) {
      if (!this.isIntheBasket) {
        this.isIntheBasket = true;
        this.bookInTheBasket.push(this.blockInfo);
        this.changeLocalStorege(true);
      }
    } else {
      this.bookInTheBasket = this.bookInTheBasket.filter(book => book.isbn !== this.blockInfo.isbn);
      this.changeLocalStorege(false);
    }
  }
  changeLocalStorege(isAdd: boolean) {
    localStorage.removeItem(this.configService.localStorageKey);
    localStorage.setItem(this.configService.localStorageKey, JSON.stringify(this.bookInTheBasket));
    this.deleteBook.emit(this.blockInfo);
    this.bookService.basketChanged(isAdd);
  }
  getFromBooksFromStorge() {
    this.bookInTheBasket = JSON.parse(localStorage.getItem(this.configService.localStorageKey) || '');
  }
}
