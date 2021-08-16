import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DellRoutingModule } from './dell-routing.module';
import { NumbineTableComponent } from './generalComponents/numbine-table/numbine-table.component';


@NgModule({
  declarations: [NumbineTableComponent],
  imports: [
    CommonModule,
    DellRoutingModule
  ]
})
export class DellModule { }
