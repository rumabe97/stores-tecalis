import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './components/loader/loader.component';
import {StoreCardComponent} from './components/store-card/store-card.component';
import {GameCardComponent} from './components/game-card/game-card.component';
import { GameModalComponent } from './components/game-modal/game-modal.component';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';


@NgModule({
    declarations: [
        LoaderComponent,
        StoreCardComponent,
        GameCardComponent,
        GameModalComponent
    ],
    exports: [
        LoaderComponent,
        StoreCardComponent,
        GameCardComponent,
        GameModalComponent
    ],
    imports: [
        CommonModule,
        ProgressbarModule
    ]
})
export class SharedModule {
}
