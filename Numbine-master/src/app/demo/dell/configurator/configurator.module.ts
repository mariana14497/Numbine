import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ReleasesComponent } from './pages/releases/releases.component';
import { UpdateReleaseComponent } from './pages/update-release/update-release.component';
import { NewReleaseComponent } from './pages/new-release/new-release.component';


@NgModule({
  declarations: [ReleasesComponent, UpdateReleaseComponent, NewReleaseComponent],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule
  ]
})
export class ConfiguratorModule { }
