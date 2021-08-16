import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { ProductReleaseMappingComponent } from './pages/product-release-mapping/product-release-mapping.component';
import { TestConfigrationsEditNewComponent } from './pages/test-configrations-edit-new/test-configrations-edit-new.component';
import { TestConfigurationComponent } from './pages/test-configuration/test-configuration.component';

const routes: Routes = [
  {
    path: 'releaseMapping',
    component: ProductReleaseMappingComponent
  },
  {
    path: 'testConfig',
    component: TestConfigurationComponent
  },
  {
    path: 'testConfigEdit',
    component: TestConfigrationsEditNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule { }
