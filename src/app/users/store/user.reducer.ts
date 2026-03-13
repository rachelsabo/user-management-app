import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  updateUser,
  deleteUser,
} from './user.actions';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,

  on(loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null,
  })),

  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map((u) => (u.id === user.id ? user : u)),
  })),

  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter((u) => u.id !== id),
  }))
);
