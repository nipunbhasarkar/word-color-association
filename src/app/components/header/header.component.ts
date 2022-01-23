import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @Output() searchColorsEvent = new EventEmitter<string>();

  @ViewChild('searchInput') input!: ElementRef<HTMLInputElement>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.input.nativeElement.value = params.keywords || '';
      this.searchColors(params.keywords);
    });
  }

  public searchColors(text: string) {
    this.searchColorsEvent.emit(text);
  }
}
