import { Routes } from '@angular/router';
import { PortofolioWebComponent } from './template/portofolio-web/portofolio-web.component';
import { AdminComponent } from './template/admin/admin.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { EkstraComponent } from './components/admin/ekstra/ekstra.component';


export const routes: Routes = [
{
    path:'',
    component:PortofolioWebComponent
}


];
