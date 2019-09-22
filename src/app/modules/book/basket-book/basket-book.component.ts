import { Component, HostListener, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config/config.service';
import { BookService } from '../../../services/book/book.service';
import { IBook } from '../../../models/book/book.i';

@Component({
  selector: 'app-basket-book',
  templateUrl: './basket-book.component.html',
  styleUrls: ['./basket-book.component.scss']
})
export class BasketBookComponent implements OnInit {
  public bookInTheBasket: IBook[] = [];
  public price: number = 0;
  public reducedPrice: number = 0;
  public isHugeScreen: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.isHugeScreen = window.innerWidth >= 1200;
  }

  constructor(private bookService: BookService, private configService: ConfigService) {
    this.onResize();
    if (!!localStorage.getItem(this.configService.localStorageKey)) {
      this.bookInTheBasket = JSON.parse(localStorage.getItem(this.configService.localStorageKey) || '');
    }
  }

  ngOnInit() {
    if (this.bookInTheBasket.length > 0) {
      this.getBooksInfo();
    }
  }
  public getOffer() {
    this.bookService.getOffre(this.bookInTheBasket).subscribe(res => {
      this.reducedPrice = this.bookService.getBestPriceOfOffer(res, this.price);
    });
  }
  getBooksInfo() {
    this.totalPrice();
    this.getOffer();
  }
  public deleteBook() {
    this.bookInTheBasket = JSON.parse(localStorage.getItem(this.configService.localStorageKey) || '');
    this.getBooksInfo();
  }
  totalPrice() {
    this.price = this.bookInTheBasket
      .map(res => res.price)
      .reduce((prev, cur) => {
        return Number(prev || 0) + Number(cur || 0);
      });
  }
}
