import {Observable} from 'rxjs';
import {Store} from '../../entities/store';
import {StoreService} from '../../repositories/store';
import {map} from 'rxjs/operators';

export function getAllStores(service: StoreService): Observable<Store[]> {
    return service.getAllStore().pipe(map(stores => stores.map(store => new Store({
        ...store,
        gamesCount: store.games_count,
        imageBackground: store.image_background,
    }))))
}