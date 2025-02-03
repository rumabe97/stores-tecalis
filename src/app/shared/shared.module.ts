import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './components/loader/loader.component';
import {StoreCardComponent} from './components/store-card/store-card.component';
import {GameCardComponent} from './components/game-card/game-card.component';


@NgModule({
    declarations: [
        LoaderComponent,
        StoreCardComponent,
        GameCardComponent
    ],
    exports: [
        LoaderComponent,
        StoreCardComponent,
        GameCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
