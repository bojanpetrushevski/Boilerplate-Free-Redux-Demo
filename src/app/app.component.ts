import { Component, OnInit } from '@angular/core';
import { AppFacade } from './+store/facade/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public appName: string;

  constructor(private appFacade: AppFacade) { }

  ngOnInit(): void {
    this.appFacade.setTitle('TV SHOWS');

    this.appFacade.selectTitle()
    .subscribe({
      next: (result: string) => {
        this.appName = result;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
