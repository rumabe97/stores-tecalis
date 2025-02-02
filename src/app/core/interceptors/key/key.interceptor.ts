import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const modifiedUrl = request.url.includes('?')
            ? `${request.url}&key=${environment.apiKey}`
            : `${request.url}?key=${environment.apiKey}`;

        const modifiedReq = request.clone({
            url: modifiedUrl,
            setHeaders: {
                'x-rapidapi-host': environment.rapidApiHost,
                'x-rapidapi-key': environment.rapidApiKey
            }
        });

        return next.handle(modifiedReq);
    }
}
