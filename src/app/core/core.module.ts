import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {KeyInterceptor} from './interceptors/key';
import {LoadingInterceptor} from './interceptors/loading';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true}, {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        }
    ],
    exports: [
        LayoutComponent
    ]
})
export class CoreModule {
}
