import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.scss']
})
export class MyViewComponent implements OnInit {
isShowSearchFilter = true;
  constructor() { }

  ngOnInit() {
  }

  showSearchFilter() {
    this.isShowSearchFilter = !this.isShowSearchFilter;
  }
}
