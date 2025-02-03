import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {LoadingService} from '../../services/loading';
import {ToastService} from '../../services/toastService';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private _loadingService: LoadingService, private toastService: ToastService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loadingService.setLoading(true, request.url);
        return next.handle(request)
            .pipe(catchError((err) => {
                this._loadingService.setLoading(false, request.url);
                const message = err.error?.error || 'An unexpected error occurred.';
                // this.toastService.show(message);
                return err;
            }))
            .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
                if (evt instanceof HttpResponse) {
                    this._loadingService.setLoading(false, request.url);
                }
                return evt;
            }));
    }
}
