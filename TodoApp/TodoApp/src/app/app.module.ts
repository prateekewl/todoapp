import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent} from './login/login.component';
import { DataService } from './data.service';
import { ListService } from './list.service';
import { LoginService} from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, ListService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
