import { type Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: ':id/edit',
    component: UserEditComponent,
  },
];

