import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit {

  @Input() appColor: string | undefined;

  constructor(private eleRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.eleRef.nativeElement.style.backgroundColor  = `#${this.appColor}`;
  }
}
