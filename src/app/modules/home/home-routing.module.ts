import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoreDetailResolver, StoreListResolver} from '../../core/resolver/home';
import {StoreDetailComponent} from './store-detail/store-detail.component';

const routes: Routes = [
    {
        path: '',
        resolve: {response: StoreListResolver},
        component: HomeComponent,
    },
    {
        path: ':id',
        component: StoreDetailComponent,
        resolve: {response: StoreDetailResolver},
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
