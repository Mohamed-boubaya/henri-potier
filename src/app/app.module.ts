import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BookModule } from './modules/book/book.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Interceptors } from './interceptors';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NotFoundComponent, FooterComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BookModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [Interceptors],
  bootstrap: [AppComponent]
})
export class AppModule {}
