import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { BookService } from '../../services/book/book.service';
import { IBook } from '../../models/book/book.i';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public bookInTheBasket: IBook[] = [];

  constructor(private bookService: BookService, private configService: ConfigService) {
    if (!!localStorage.getItem(this.configService.localStorageKey)) {
      this.bookInTheBasket = JSON.parse(localStorage.getItem(this.configService.localStorageKey) || '');
    }
  }

  ngOnInit() {
    this.bookService.changeBasket$.subscribe(res => {
      this.bookInTheBasket = JSON.parse(localStorage.getItem(this.configService.localStorageKey) || '');
    });
  }
}
