import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoreListResolver} from '../../core/resolver/home';

const routes: Routes = [
    {
        path: '',
        resolve: {response: StoreListResolver},
        component: HomeComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
