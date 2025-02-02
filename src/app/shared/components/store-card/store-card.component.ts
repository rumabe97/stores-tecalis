import {Component, Input, OnInit} from '@angular/core';
import {Store} from '../../../core/entities/store';
import {Router} from '@angular/router';

@Component({
    selector: 'app-store-card',
    templateUrl: './store-card.component.html',
    styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

    @Input() store: Store;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    goToStore() {
        this.router.navigate(['/stores', this.store.id]).then();
    }
}
