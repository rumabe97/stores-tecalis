import {StoreService} from '../../repositories/store';
import {Observable} from 'rxjs';
import {Store} from '../../entities/store';
import {map} from 'rxjs/operators';

export function getStore(id: number, service: StoreService): Observable<Store> {
    return service.getStore(id).pipe(map(store => new Store({
        ...store,
        gamesCount: store.games_count,
        imageBackground: store.image_background,
    })))
}