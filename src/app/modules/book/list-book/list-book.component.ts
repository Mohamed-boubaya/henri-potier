import { Component, HostListener, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { IBook } from '../../../models/book/book.i';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  public listOfBook: IBook[];
  public filterName: string;
  public isHugeScreen: boolean;
  public serverError: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.isHugeScreen = window.innerWidth >= 1200;
  }

  constructor(private bookService: BookService) {
    this.onResize();
  }

  ngOnInit() {
    this.bookService.getListOfBook().subscribe(
      res => {
        this.listOfBook = res;
      },
      () => {
        this.serverError = true;
      }
    );
  }
}
