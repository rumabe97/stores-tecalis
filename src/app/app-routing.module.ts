import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'stores', pathMatch: 'full'},
    {path: 'stores', loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: []
})
export class AppRoutingModule {
}
