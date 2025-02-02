import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {StoreDto} from './@types/StoreTypes';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    url = environment.url;

    constructor(private _http: HttpClient) {
    }

    getAllStore(): Observable<StoreDto[]> {
        return this._http.get<any>(`${this.url}stores`)
            .pipe(map(value => value.results))
    }

    getStore(id: number): Observable<StoreDto> {
        return this._http.get<any>(`${this.url}stores/${id}`);
    }
}
