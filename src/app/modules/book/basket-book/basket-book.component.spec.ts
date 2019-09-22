import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBookComponent } from './basket-book.component';

describe('BasketBookComponent', () => {
  let component: BasketBookComponent;
  let fixture: ComponentFixture<BasketBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
