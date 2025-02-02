import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {StoreService} from '../../repositories/store';
import {getStore} from '../../services/store';
import {Store} from '../../entities/store';

@Injectable({
    providedIn: 'root'
})
export class StoreDetailResolver implements Resolve<Store> {
    constructor(private _storeService: StoreService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Store> {
        return getStore(route.params.id, this._storeService);
    }
}
