import { Component } from '@angular/core';

import { GlobalService } from '../../services/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalService]
})
export class AppComponent {
  title = 'app';

  public objLoaderStatus: boolean;

  constructor(public vars:GlobalService) {
    this.objLoaderStatus = true;
  }

  ngOnInit() {
    this.vars.loaderStatus.subscribe((val: boolean) => {
        this.objLoaderStatus = val;
    });

    // check if user already login then redirect to dashboard

    // else on login page
  }
}
