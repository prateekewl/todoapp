import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
  },
  {
        path: 'user',
        component: UserComponent,
        pathMatch: 'full'
  },
  {
        path: 'task',
        component: TaskComponent,
        pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
