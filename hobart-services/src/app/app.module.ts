import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ActivityTabsComponent } from './components/activity-tabs/activity-tabs.component';
import { FilterByActivePipe } from './components/usertable/filter-by-active-pipe';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsertableComponent,
    TabsComponent,
    ActivityTabsComponent,
    FilterByActivePipe,
    CreateUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FilterByActivePipe],
})
export class AppModule {}
