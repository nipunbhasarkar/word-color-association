import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCssComponent } from './card-css.component';

describe('CardCssComponent', () => {
  let component: CardCssComponent;
  let fixture: ComponentFixture<CardCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
