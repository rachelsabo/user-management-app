import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs';
import { MOCK_USERS } from '../models/user.model';
import { loadUsers, loadUsersSuccess } from './user.actions';

export class UserEffects {
  private readonly actions = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadUsers),
      delay(500),
      map(() => loadUsersSuccess({ users: [...MOCK_USERS] }))
    )
  );
}
