# Angular NgRx User Management

A small demo application built with **Angular 19**, **NgRx**, **Angular Material** and **Reactive Forms**.

The application demonstrates state management using NgRx, form validation, and basic CRUD-like UI interactions over an in-memory users list.

---

## Features

* Angular 19 project setup with standalone components
* NgRx Store with:

  * Actions
  * Reducer
  * Effects
  * Selectors
* Reactive Forms with validations
* Mock “HTTP-like” request with 500ms delay (via NgRx Effect)
* User list with loading, error and empty states
* User edit form with validation
* Delete confirmation (console output)
* Soft, modern Material UI

---

## Data Model

```ts
export interface User {
  id: number;
  email: string;
  username: string;
  age: number;
}
```

---

## State Structure

```ts
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
```

---

## Project Structure

```text
src/app

app.component.*           # shell (toolbar, layout, footer)
app.config.ts             # provideRouter, provideStore, provideEffects, provideHttpClient, provideAnimations

users/
  models/
    user.model.ts         # User interface + MOCK_USERS

  store/
    user.actions.ts
    user.reducer.ts
    user.effects.ts
    user.selectors.ts

  user.routes.ts          # /users, /users/:id/edit routes

  components/
    user-list/
      user-list.component.ts
      user-list.component.html
      user-list.component.scss

    user-edit/
      user-edit.component.ts
      user-edit.component.html
      user-edit.component.scss
```

---

## Main Functionality

### User List

* Loads users from NgRx Store on initialization (dispatches `loadUsers` if state is empty).
* Displays:

  * Loading state (spinner)
  * Error state
  * Empty state
  * List of users in a Material table
* Actions:

  * Edit user (navigates to `/users/:id/edit`)
  * Delete user (confirmation + `console.log`, dispatches `deleteUser`)

### User Edit Form

Reactive form with validation:

**Email**

* required
* valid email format

**Username**

* required
* min length: 3
* no spaces (pattern: `^[^\s]{3,}$`)
* cannot be `admin` (custom validator)

**Age**

* required
* must be between 18 and 100

Save button is disabled when:

* the form is invalid

On submit the form values are logged to the console and an `updateUser` action is dispatched.  
After a successful submit, the user is navigated back to the users list.

---

## Mock Data

Users are loaded via an NgRx **Effect** that simulates an HTTP request using a **500ms delay**.

Example:

```ts
export const MOCK_USERS: User[] = [
  { id: 1, email: 'alice@example.com',  username: 'alice',      age: 28 },
  { id: 2, email: 'bob@example.com',    username: 'bobby',      age: 34 },
  { id: 3, email: 'charlie@example.com',username: 'charlie_c',  age: 22 },
  { id: 4, email: 'dana@example.com',   username: 'dana_d',     age: 30 },
];
```

---

## Running the Project

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
# or
ng serve
```

Open:

```text
http://localhost:4200
```

---

## Technologies Used

* Angular 19 (standalone components)
* NgRx Store & Effects
* TypeScript
* Reactive Forms
* Angular Material
* SCSS

---

## Notes

This project was created as part of a **technical assignment** to demonstrate Angular, NgRx and Angular Material development skills using a simple user management scenario.

