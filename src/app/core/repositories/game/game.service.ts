import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GameDto} from './@types/GamesType';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    url = environment.url;

    constructor(private _http: HttpClient) {
    }

    getGamesOfStore(): Observable<GameDto[]> {
        return this._http.get<any>(`${this.url}games`)
            .pipe(map(value => value.results))
    }
}
