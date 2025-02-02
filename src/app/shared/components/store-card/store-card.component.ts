import {Component, Input, OnInit} from '@angular/core';
import {Store} from '../../../core/entities/store';

@Component({
    selector: 'app-store-card',
    templateUrl: './store-card.component.html',
    styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

    @Input() store: Store;

    constructor() {
    }

    ngOnInit(): void {
    }

}
