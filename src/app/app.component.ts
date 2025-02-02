import {
    Component,
    OnInit,
} from '@angular/core';
import {getAllStores} from './core/services/store';
import {StoreService} from './core/repositories/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private _storeService: StoreService) {
    }


    ngOnInit() {
        getAllStores(this._storeService).subscribe(stores => {
            console.log(stores)
        })
    }
}
