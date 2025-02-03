import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './components/loader/loader.component';
import {StoreCardComponent} from './components/store-card/store-card.component';
import {GameCardComponent} from './components/game-card/game-card.component';
import { GameModalComponent } from './components/game-modal/game-modal.component';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import { HeaderComponent } from './components/header/header.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {RouterModule} from '@angular/router';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        LoaderComponent,
        StoreCardComponent,
        GameCardComponent,
        GameModalComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        LoaderComponent,
        StoreCardComponent,
        GameCardComponent,
        GameModalComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        ProgressbarModule,
        BsDropdownModule,
        RouterModule,
        TooltipModule,
        CollapseModule
    ]
})
export class SharedModule {
}
