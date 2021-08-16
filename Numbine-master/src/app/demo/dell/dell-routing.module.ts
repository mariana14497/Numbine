import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./generalScreens/dashboard-container/dashboard-container.module').then(module => module.DashboardContainerModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./Admin/admin.module').then(module => module.AdminModule)
      },
      {
        path: 'config',
        loadChildren: () => import('./configurator/configurator.module').then(module => module.ConfiguratorModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DellRoutingModule { }
