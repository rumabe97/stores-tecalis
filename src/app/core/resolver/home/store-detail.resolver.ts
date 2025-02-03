import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {StoreService} from '../../repositories/store';
import {getAllStores, getStore} from '../../services/store';
import {Store} from '../../entities/store';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StoreDetailResolver implements Resolve<Store> {
    constructor(private _storeService: StoreService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Store> {
        const storeId: number = route.params.id;

        const storeDetail = getStore(storeId, this._storeService);
        const allStore = getAllStores(this._storeService);

        return forkJoin([storeDetail, allStore]).pipe(
            map(data => new Store({
                ...data[0],
                games: data[1].find(s => s.id.toString() === storeId.toString())?.games
            }))
        );
    }
}
