import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {KeyInterceptor} from './interceptors/key';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true}
    ],
})
export class CoreModule {
}
