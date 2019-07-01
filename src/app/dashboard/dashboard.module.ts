import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { dashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [HomeComponent, AdminComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: []
})
export class DashboardModule { }
