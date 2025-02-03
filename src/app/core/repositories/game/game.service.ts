import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameDto} from './@types/GamesType';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    url = environment.url;

    constructor(private _http: HttpClient) {
    }

    getGameDetail(id: number): Observable<GameDto> {
        return this._http.get<any>(`${this.url}games/${id}`);
    }
}
