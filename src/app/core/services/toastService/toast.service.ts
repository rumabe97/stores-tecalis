import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private toastr: ToastrService) {
    }

    show(message: string): void {
        this.toastr.error(message + '. Reload the page', 'Error', {
            positionClass: 'toast-center-center',
        });
    }
}
