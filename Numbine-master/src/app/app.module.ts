import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './demo/dell/generalComponents/button/button.component';
import { TestComponent } from './demo/dell/generalComponents/test/test.component';
import { InputComponent } from './demo/dell/generalComponents/input/input.component';
import { IconComponent } from './demo/dell/generalComponents/icon/icon.component';
import { NumbineNavLeftComponent } from './demo/dell/generalComponents/numbineNavbar/numbine-nav-left/numbine-nav-left.component';
import { NumbineNavRightComponent } from './demo/dell/generalComponents/numbineNavbar/numbine-nav-right/numbine-nav-right.component';
import { NumbineNavbarComponent } from './demo/dell/generalComponents/numbine-navbar/numbine-navbar.component';
import { NumbineNavigationComponent } from './demo/dell/generalComponents/numbine-navigation/numbine-navigation.component';
import { NumbineNavContentComponent } from './demo/dell/generalComponents/numbineNavigation/numbine-nav-content/numbine-nav-content.component';
import { NumbineNavGroupComponent } from './demo/dell/generalComponents/numbineNavigation/numbineNavigation/numbine-nav-group/numbine-nav-group.component';
import { NumbineNavCollapseComponent } from './demo/dell/generalComponents/numbineNavigation/numbine-nav-collapse/numbine-nav-collapse.component';
import { NumbineNavItemComponent } from './demo/dell/generalComponents/numbineNavigation/numbine-nav-item/numbine-nav-item.component';
import { NumbineChartsComponent } from './demo/dell/generalComponents/numbine-charts/numbine-charts.component';
import { NumbineAlertComponent } from './demo/dell/generalComponents/numbine-alert/numbine-alert.component';
import { LogInComponent } from './demo/dell/generalScreens/log-in/log-in.component';
import { ProductSelectorComponent } from './demo/dell/configurator/components/product-selector/product-selector.component';
import { ProductReleaseMappingComponent } from './demo/dell/configurator/pages/product-release-mapping/product-release-mapping.component';
import { NewParamMappingComponent } from './demo/dell/configurator/pages/new-param-mapping/new-param-mapping.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    ButtonComponent,
    TestComponent,
    InputComponent,
    IconComponent,
    NumbineNavLeftComponent,
    NumbineNavRightComponent,
    NumbineNavbarComponent,
    NumbineNavigationComponent,
    NumbineNavContentComponent,
    NumbineNavGroupComponent,
    NumbineNavCollapseComponent,
    NumbineNavItemComponent,
    NumbineChartsComponent,
    NumbineAlertComponent,
    ProductSelectorComponent,
    LogInComponent,
    ProductReleaseMappingComponent,
    NewParamMappingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
