import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../../shared/shared.module';
import { StoreDetailComponent } from './store-detail/store-detail.component';


@NgModule({
    declarations: [
        HomeComponent,
        StoreDetailComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule {
}
