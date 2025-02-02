import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {StoreService} from '../../repositories/store';
import {getAllStores} from '../../services/store';
import {Store} from '../../entities/store';

@Injectable({
    providedIn: 'root'
})
export class StoreListResolver implements Resolve<Store[]> {
    constructor(private _storeService: StoreService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Store[]> {
        return getAllStores(this._storeService);
    }
}
