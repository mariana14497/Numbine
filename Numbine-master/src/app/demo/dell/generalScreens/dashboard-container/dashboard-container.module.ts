import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardContainerRoutingModule } from './dashboard-container-routing.module';
import { ButtonComponent } from '../../generalComponents/button/button.component';
import { CardModule } from 'src/app/theme/shared/components';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardContainerRoutingModule
  ]
})
export class DashboardContainerModule { }
