import {Component, OnInit} from '@angular/core';
import {Store} from '../../../core/entities/store';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-store-detail',
    templateUrl: './store-detail.component.html',
    styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {
    store: Store;
    safeDescription!: SafeHtml;

    constructor(private _route: ActivatedRoute, private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.store = this._route.snapshot.data.response;
        this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.store.description);
    }

}
