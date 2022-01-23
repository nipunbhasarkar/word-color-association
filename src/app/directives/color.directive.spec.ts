import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from '../components/card/card.component';
import { ColorDirective } from './color.directive';

describe('ColorDirective', () => {

  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let inputEl: DebugElement;
  let directive = ColorDirective;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective, CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(directive));

    component.card = {
      hex: '000000'
    };
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set the color as hex color', () => {
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('rgb(0, 0, 0)');
  });
});
