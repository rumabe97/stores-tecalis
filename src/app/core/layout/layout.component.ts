import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../services/loading';
import {delay} from 'rxjs/operators';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    loading = false;

    constructor(private _loadingService: LoadingService) {
    }

    ngOnInit(): void {
        this.listenToLoading();
    }

    listenToLoading(): void {
        this._loadingService.loadingSub.pipe(delay(0)).subscribe((loading) => {
            this.loading = loading;
        })
    }

}
