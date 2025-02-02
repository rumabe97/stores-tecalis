import { Component, OnInit } from '@angular/core';
import {Store} from '../../../core/entities/store';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stores:Store[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stores = this._route.snapshot.data.response;
    console.log(this.stores)
  }

}
