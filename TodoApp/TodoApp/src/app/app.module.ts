import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasksComponent } from './tasks/tasks.component';
import { DataService } from './data.service';
import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
