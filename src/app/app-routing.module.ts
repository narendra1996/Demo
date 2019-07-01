import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomePageComponent } from './home-page/home-page.component';
import { MyViewComponent } from './my-view/my-view.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { LienGridComponent } from './lien-grid/lien-grid.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomePageComponent },
  { path: 'MyView', component: MyViewComponent },
  { path: 'search', component: SearchFilterComponent },
  { path: 'grid', component: LienGridComponent }

];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule,
    MatGridListModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
