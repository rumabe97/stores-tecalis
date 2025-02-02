import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './components/loader/loader.component';
import { StoreCardComponent } from './components/store-card/store-card.component';


@NgModule({
    declarations: [
        LoaderComponent,
        StoreCardComponent
    ],
    exports: [
        LoaderComponent,
        StoreCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
