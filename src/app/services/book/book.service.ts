import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../../models/book/book.i';
import { Observable, Subject } from 'rxjs';
import { EOfferType, IOffer, IOfferInfo } from '../../models/book/offer.i';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(public config: ConfigService, public http: HttpClient) {}
  public emitChangeSource: Subject<boolean> = new Subject<boolean>();
  public changeBasket$ = this.emitChangeSource.asObservable();

  basketChanged(isAdd: boolean) {
    this.emitChangeSource.next(isAdd);
  }

  getListOfBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.config.baseUrl}/books`);
  }

  getOffre(books: IBook[]): Observable<IOffer> {
    const ids = books.map(book => book.isbn).join(',');
    return this.http.get<IOffer>(`${this.config.baseUrl}/books/${ids}/commercialOffers`);
  }
  private offerPercentage(offer: IOfferInfo, price: number): number {
    return price - (offer.value / 100) * price;
  }
  private offerMinus(offer: IOfferInfo, price: number): number {
    return price - offer.value;
  }
  private offerSlice(offer: IOfferInfo, price: number): number {
    return price - Math.floor(price / offer.sliceValue) * offer.value;
  }
  getBestPriceOfOffer(offer: IOffer, price: number): number {
    const offerPrices = [];
    for (const off of offer.offers) {
      switch (off.type) {
        case EOfferType.MINUS:
          offerPrices.push(this.offerMinus(off, price));
          break;
        case EOfferType.PERCENTAGE:
          offerPrices.push(this.offerPercentage(off, price));
          break;
        case EOfferType.SILCE:
          offerPrices.push(this.offerSlice(off, price));
          break;
        default:
          console.log(`${off.type} is not yet implemented `);
      }
    }
    return Math.min.apply(Math, offerPrices);
  }
}
