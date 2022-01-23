import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

   it('should do nothing if text is undefined', () => {
     component.searchColors();
    expect(component.colors$).toBeUndefined();
  });

   it('should do call data service fetch method if valid string is passed', () => {
     const spyObj = spyOn(component['dataService'], 'fetchColors').and.callThrough();
     component.searchColors('moon');
    expect(spyObj).toHaveBeenCalledWith('moon');
  });
});
