import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchDataService } from './services/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public colors$!: Observable<any>;

  constructor(private dataService: FetchDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  public searchColors(text?: string) {
    if (text === undefined) {
      return;
    }
    const queryParams: Params = { keywords: text };
     this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams
    });
    this.colors$ = this.dataService.fetchColors(text);
  }
}
