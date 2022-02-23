import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-css',
  templateUrl: './card-css.component.html',
  styleUrls: ['./card-css.component.scss']
})
export class CardCssComponent implements OnInit {

  @Input() card: any;
  constructor() { }

  ngOnInit(): void {
  }

}
