/*
 * Automatically generated by Magic
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { UserManagementComponent } from '@app/common/user-management/user-management.component';

// Then importing all CRUD components.
import { Todos_my_todoComponent } from '../components/todos/my_todo/todos_my_todo.component';


const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: HomeComponent, data: { title: marker('Home') } },
    { path: 'users', component: UserManagementComponent, data: { title: marker('User management') } },

    // Then routes for all CRUD components.
    { path: 'crud/todos/my_todo', component: Todos_my_todoComponent, data: { title: marker('todos/my_todo') } },

  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
